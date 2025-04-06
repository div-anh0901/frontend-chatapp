import user1 from '../images/conversation2.jpeg';
function ChatContainer() {
  return (
    <div className="w-[100%] chat_container">
        <div className="flex flex-end mt-[10px] ml-[10px] ">
            <div className="relative w-[55px] h-[55px]">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
            </div>
            <div className="chat ml-[10px]">
                <div className="bg-white max-w-[350px] p-[10px] radius-left-bottom word-wrap" >
                    Make sure you’re not initializing the full appMake sure you’re not initializing the full appMake sure you’re not initializing the full app Make sure you’re not initializing the full app
                </div>
                <span className="mt-[5px] text-[15px] text-[#7f8384]">8:19 PM</span>
            </div>
        </div>
        <div className="flex-row-reverse flex-end mt-[10px] ml-[10px] ">
            <div className="relative w-[55px] h-[55px]">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
            </div>
            <div className="chat mr-[10px]">
                <div className="max-w-[350px] p-[10px] radius-right-bottom word-wrap bg-[#01aa85] text-white" >
                    Make sure you’re not initializing the full appMake sure you’re not initializing the full appMake sure you’re not initializing the full app Make sure you’re not initializing the full app
                </div>
                <span className="mt-[5px] text-[15px] max-w-[350px] text-[#7f8384] text-right flex-row-reverse flex-end">8:19 PM</span>
            </div>
        </div>

        <div className="flex-row-reverse flex-end mt-[10px] ml-[10px] ">
            <div className="relative w-[55px] h-[55px]">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
            </div>
            <div className="chat mr-[10px]">
                <div className="max-w-[350px] p-[10px] radius-right-bottom word-wrap bg-[#01aa85] text-white" >
                    Make sure you’re not initializing the full appMake sure you’re not initializing the full appMake sure you’re not initializing the full app Make sure you’re not initializing the full app
                </div>
                <span className="mt-[5px] text-[15px] max-w-[350px] text-[#7f8384] text-right flex-row-reverse flex-end">8:19 PM</span>
            </div>
        </div>

        <div className="flex-row-reverse flex-end mt-[10px] ml-[10px] ">
            <div className="relative w-[55px] h-[55px]">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
            </div>
            <div className="chat mr-[10px]">
                <div className="max-w-[350px] p-[10px] radius-right-bottom word-wrap bg-[#01aa85] text-white" >
                    Make sure you’re not initializing the full appMake sure you’re not initializing the full appMake sure you’re not initializing the full app Make sure you’re not initializing the full app
                </div>
                <span className="mt-[5px] text-[15px] max-w-[350px] text-[#7f8384] text-right flex-row-reverse flex-end">8:19 PM</span>
            </div>
        </div>

        <div className="flex flex-end mt-[10px] ml-[10px] ">
            <div className="relative w-[55px] h-[55px]">
                <img className="w-[55px] h-[55px] rounded-[50%]" src={user1} alt="" />
            </div>
            <div className="chat ml-[10px]">
                <div className="bg-white max-w-[350px] p-[10px] radius-left-bottom word-wrap" >
                    Make sure you’re not initializing the full appMake sure you’re not initializing the full appMake sure you’re not initializing the full app Make sure you’re not initializing the full app
                </div>
                <span className="mt-[5px] text-[15px] text-[#7f8384]">8:19 PM</span>
            </div>
        </div>

    </div>
  )
}

export default ChatContainer