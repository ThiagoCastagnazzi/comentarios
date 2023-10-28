import { format } from "date-fns-tz";

interface iComentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

interface Teste {
  comentarios: iComentario[];
}

export default function CommentBox({ comentarios }: Teste) {
  return (
    <div className="bg-gray-800 rounded">
      {comentarios.length > 0 ? (
        comentarios.map((comentario) => (
          <div key={comentario.id} className="flex flex-col p-10 gap-10">
            <div className="flex flex-col w-full border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-between gap-2 bg-gray-900 p-2 rounded">
                <div className="flex items-center gap-2">
                  <img
                    src="https://rugby.vlaanderen/wp-content/uploads/2018/03/Anonymous-Profile-pic.jpg"
                    alt="Imagem Autor"
                    className="w-10 rounded-full"
                  />
                  <p>{comentario.autor}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">
                    {format(new Date(comentario.data), "dd/MM/yyyy HH:mm:ss", {
                      timeZone: "America/Sao_Paulo",
                    })}
                  </span>
                </div>
              </div>
              <p className="mt-2 p-4 break-words">{comentario.comentario}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="p-10 text-center">
          <span className="text-lg md:text-3xl text-bold text-center">
            Nenhum Comentario ainda...
          </span>
        </div>
      )}
    </div>
  );
}
