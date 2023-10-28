import CommentBox from "../CommentBox";
import CommentForm from "../CommentForm";

interface iComentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

interface iCommentListProps {
  comentarios: iComentario[];
  addComment: (newComment: iComentario) => void;
  lastId: number;
}

export default function CommentList({
  comentarios,
  addComment,
  lastId,
}: iCommentListProps) {
  return (
    <div className="flex flex-col px-4">
      <CommentBox comentarios={comentarios} />
      <CommentForm onAddComment={addComment} lastId={lastId} />
    </div>
  );
}
