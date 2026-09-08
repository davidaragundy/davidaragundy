import { highlight } from "sugar-high";

export const Code = ({ children, ...props }: React.ComponentProps<"code">) => {
  const codeHTML = highlight(children?.toString() ?? "");

  return <code {...props} dangerouslySetInnerHTML={{ __html: codeHTML }} />;
};
