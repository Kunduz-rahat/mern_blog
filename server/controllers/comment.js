import Comment from "../models/Comment.js"
import Post from "../models/Post.js"
export const createComment = async(req, res)=>{
try{
const {postId, comment} = req.body
if(!comment){
	return res.json({message:"Комментарий не может быть пустым"})
}
const newComment = new Comment({comment})
await newComment.save()
try{
await Post.findByIdAndUpdate(postId,{
	$push:{comments:newComment._id}
})
}catch(e){
	res.json({
		message:"Что-то пошло не так"
	})
}
res.json(newComment)
}catch(e){
	res.json({
		message:"Произошла ошибка при создании комментария к посту"
	})
}
}