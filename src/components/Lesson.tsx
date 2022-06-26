import { isPast, format } from "date-fns/esm";
import { CheckCircle, Lock } from "phosphor-react";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isLessonActive = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isLessonActive,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm font-medium",
                {
                  "text-white": isLessonActive,
                  "text-blue-500": !isLessonActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border font-bold",
              {
                "border-white": isLessonActive,
                "border-green-300": !isLessonActive,
              }
            )}
          >
            {props.type == "live" ? "Ao Vivo" : "Aula Prática"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isLessonActive,
            "text-gray-200": !isLessonActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
