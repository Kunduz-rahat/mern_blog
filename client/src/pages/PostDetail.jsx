import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillEye,
  AiOutlineMessage,
  AiTwotoneEdit,
  AiFillDelete,
} from "react-icons/ai";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import {
  createComment,
  getPostComments,
} from "../store/features/comment/commentSlice";
import { CommentItem } from "../components/CommentItem";
import { Spinner } from "../components/Spinner";
import { removePost } from "../store/features/post/postSlice";

export const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const removePostHandler = () => {
    try {
      dispatch(removePost(params.id));
      toast("Пост был удален");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    try {
      const postId = params.id;
      dispatch(createComment({ postId, comment }));
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getPostComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  if (!post) {
    return <Spinner />;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <button className="md:flex justify-center items-center bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  text-xs text-white rounded-sm py-2 px-4">
        <Link className="flex" to={"/"}>
          Назад
        </Link>
      </button>

      <div className="md:flex gap-10 py-8">
        <div className="md:w-2/3 w-full">
          <div className="w-full md:flex md:flex-col md:basis-1/4 flex-grow">
            <div
              className={
                post?.imgUrl ? "flex rouded-sm h-80" : "flex rounded-sm"
              }
            >
              {post?.imgUrl && (
                <img
                  src={`https://mern-blog-rho.vercel.app/api/${post.imgUrl}`}
                  alt="img"
                  className="object-cover w-full"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-black opacity-50">{post.username}</div>
            <div className="text-xs text-black opacity-50">
              <Moment date={post.createdAt} format="D MMM YYYY" />
            </div>
          </div>
          <div className="text-black text-xl font-gloock uppercase font-semibold">
            {post.title}
          </div>
          <p className="text-black opacity-60 text-[14px] pt-4">{post.text}</p>

          <div className="flex gap-3 items-center mt-2 justify-between">
            <div className="flex gap-3 mt-4">
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiFillEye /> <span>{post.views}</span>
              </button>
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiOutlineMessage /> <span>{post.comments?.length || 0} </span>
              </button>
            </div>

            {user?._id === post.author && (
              <div className="flex gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 text-black opacity-50">
                  <Link to={`/${params.id}/edit`}>
                    <AiTwotoneEdit />
                  </Link>
                </button>
                <button
                  onClick={removePostHandler}
                  className="flex items-center justify-center gap-2  text-black opacity-50"
                >
                  <AiFillDelete />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 p-8 w-full mt-3 bg-[#aee9e4]  flex flex-col gap-2 rounded-sm">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              className="text-black w-full rounded-sm bg-gradient-to-r from-[#5271FF] to-[#05CCCB] border p-2 text-xs outline-none placeholder:text-gray-700"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex justify-center items-center bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-xs text-white rounded-sm py-2 px-4"
            >
              Отправить
            </button>
          </form>

          {comments?.map((cmt) => (
            <CommentItem key={cmt._id} cmt={cmt} />
          ))}
        </div>
      </div>
    </div>
  );
};
