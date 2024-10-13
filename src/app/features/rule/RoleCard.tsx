import { RoleCardProps } from "@/app/apis/types/rule";
import NoRightClickImg from "@/components/NoRightClickImg";
import Image from "next/image";

export const RoleCard: React.FC<RoleCardProps> = ({
  img,
  alt,
  title,
  subtitle,
  description,
  alignment,
}) => {
  const alignmentStyle = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const textAlignmentStyle = alignment === "right" ? "text-right" : "text-left";

  return (
    <div
      className={`flex items-center ${alignmentStyle[alignment]} mx-auto w-3/5 space-x-20 py-20`}
    >
      {alignment === "right" ? (
        <>
          <div className={textAlignmentStyle}>
            <div className="flex items-end justify-end space-x-2">
              <p className="flex text-3xl font-bold">{title}</p>
              <p className={"font-bold"}>{subtitle}</p>
            </div>
            <div className="flex flex-col">
              {description.map((text, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? `mb-8 mt-2 font-bold ${textAlignmentStyle}`
                      : `mb-2 ${textAlignmentStyle}`
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <NoRightClickImg>
            <Image src={img} alt={alt} width={200} height={320} />
          </NoRightClickImg>
        </>
      ) : (
        <>
          <NoRightClickImg>
            <Image src={img} alt={alt} width={200} height={320} />
          </NoRightClickImg>
          <div className={textAlignmentStyle}>
            <div className="flex items-end space-x-2">
              <p className={`text-3xl font-bold ${textAlignmentStyle}`}>
                {title}
              </p>
              <p className={`font-bold ${textAlignmentStyle}`}>{subtitle}</p>
            </div>
            <div className="flex flex-col">
              {description.map((text, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? `mb-8 mt-2 font-bold ${textAlignmentStyle}`
                      : `mb-2 ${textAlignmentStyle}`
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
