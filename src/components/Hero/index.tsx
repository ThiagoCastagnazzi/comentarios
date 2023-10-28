import CommentList from "../CommentList";
import Header from "../Header";

import { useEffect, useState } from "react";

interface iComentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

export default function Hero() {
  const [comentarios, setComentarios] = useState<iComentario[]>([]);
  const [lastId, setLastId] = useState<number>(0);

  useEffect(() => {
    const storageComentarios = localStorage.getItem("comentarios") || "[]";
    const newComentarios = JSON.parse(storageComentarios);

    if (newComentarios.length > 0) {
      const StorageLastId = newComentarios[newComentarios.length - 1].id;

      setLastId(StorageLastId);
    }

    setComentarios(newComentarios);
  }, []);

  const addComment = (newComment: iComentario) => {
    setComentarios([...comentarios, newComment]);

    localStorage.setItem(
      "comentarios",
      JSON.stringify([...comentarios, newComment])
    );

    setLastId(newComment.id);
  };

  const sortByDate = () => {
    const sortedComments = comentarios.sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );

    setComentarios([...sortedComments]);
  };

  useEffect(() => {
    sortByDate();
  }, [comentarios]);

  return (
    <div className="mb-4 max-w-[1200px] mx-auto ">
      <Header />

      <div className="mt-4 mb-4 px-6">
        <p className="text-2xl md:text-7xl font-bold text-center">
          Deixe um comentário ou um pensamento seu.
        </p>
        <p className="text-gray-500 text-sm text-center md:text-end mt-4 md:mt-0 font-bold">
          Comentarios: {comentarios.length}
        </p>
      </div>

      <CommentList
        addComment={addComment}
        comentarios={comentarios}
        lastId={lastId}
      />
    </div>
  );
}
