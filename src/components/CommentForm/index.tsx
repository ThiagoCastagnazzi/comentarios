import { useState } from "react";

interface IComentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

interface ICommentFormProps {
  onAddComment: (newComment: IComentario) => void;
  lastId: number;
}

export default function CommentForm({
  onAddComment,
  lastId,
}: ICommentFormProps) {
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");

  const handleAddComment = () => {
    if (!autor || !comentario) return;

    const newComment = {
      id: lastId + 1,
      autor,
      comentario,
      data: new Date(),
    };

    onAddComment(newComment);

    setAutor("");
    setComentario("");
  };

  return (
    <div>
      <div className="flex flex-col mt-10 gap-4">
        <p className="text-2xl font-bold">Deixe Seu Comentário</p>
        <input
          className="
                    bg-gray-200 
                    appearance-none 
                    border-2 
                    border-gray-200 
                    rounded 
                    w-full
                    md:w-[300px]
                    py-2 
                    px-4 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:bg-white 
                    focus:border-gray-500"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <textarea
          className="
                    resize-none 
                    rounded-md 
                    w-full
                    md:w-[500px]
                    h-[150px] 
                    py-2 
                    px-4
                    focus:outline-none 
                    focus:bg-white 
                    focus:border-purple-500
                    text-gray-700"
          placeholder="Comentário..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddComment}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
