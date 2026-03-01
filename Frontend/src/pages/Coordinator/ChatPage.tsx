import {Button} from "@/components/ui/button.tsx";
import {Undo2} from "lucide-react";
import ChatBox, {type MessageComponent} from "@/layouts/ChatBox.tsx";
import {useState} from "react";

export default function ChatPage() {
    const [messages, setMessages] = useState<MessageComponent[]>([]);

    return (
        <div className="flex flex-col items-start justify-center bg-white mt-[6vh]">
            <Button className="!bg-gray-300 !text-black !font-bold ml-[1vw]">
                <Undo2 className="!w-5 !h-5" strokeWidth={2.5} />
                Quay Lại
            </Button>
            <div className="flex flex-row justify-start items-center gap-0
            w-[100vw] mt-[2vh] h-[75vh]">
                <ChatBox title={"Hộp thoại"} senderName={"Điều phối viên"}
                         messages={messages} setMessages={setMessages}
                className="w-[50vw] h-full"/>
                <div className="w-[50vw] h-full bg-gray-300">
                    {/* Header */}
                    <div className="bg-red-600 text-white text-center font-bold text-xl py-[2.05vh]">
                        Thông tin nhóm giải cứu
                    </div>

                    {/* Content */}
                    <div className="p-6 min-h-[350px] space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-lg">
                            Đội trưởng nhóm #100
                          </span>

                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                            Đã nhận nhiệm vụ
                          </span>
                        </div>

                        <div className="text-lg">
                            <span className="font-semibold">Sử dụng phương tiện giải cứu:</span>
                        </div>

                        <div className="text-lg">
                            <span className="font-semibold">Vị trí:</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}