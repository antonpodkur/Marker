import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { useEffect } from "react";

interface OnChangePluginProps {
  onChange: (editorState: EditorState) => void
}

const OnChangePlugin: React.FC<OnChangePluginProps> = ({ onChange }) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return editor.registerUpdateListener(({editorState}) => {
      onChange(editorState);
    })
  }, [editor, onChange])

  return null
} 

export default OnChangePlugin 