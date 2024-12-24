import { Paper } from "@mui/material";
import {Message} from "@/types/message"

interface Props {
  msg: Message
};

export default function ChatMessage({msg}: Props) {
  const senderTypography = (msg.isUser ? `text-gray-900` : `text-gray-700 italic`)
  return(
    <div className={'w-full flex ' + (msg.isUser ? 'justify-end' : 'justify-start') }>
      <Paper className="px-4 py-2 mb-3 flex">
        <p className={senderTypography}>
          {msg.text}
        </p>
      </Paper>
    </div>
  )
}
