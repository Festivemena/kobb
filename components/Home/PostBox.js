import React, {useState} from 'react'
import Image from 'next/image'
import ptq from '../../assets/Ellipse.png'

const style = {
    wrapper: `px-4 flex  flex-row pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }

const PostBox = () => {
    const [postMessage, setPostMessage] = useState('')
    const Post = (event) => {
        event.preventDefault()
        console.log(postMessage)
    }
  return (
    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
            <Image
            width={30} height={30}
          src={ptq}
          alt="profile image"
          className={ style.profileImage}
        /></div>
        <div className={style.tweetBoxRight}>
            <form>
                <textarea  onChange={e => setPostMessage(e.target.value)}
            value={postMessage} placeholder="What's happening?"
            className={style.inputField}></textarea>
            <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}></div>
            <button
              type='submit'
              onClick={event => Post(event)}
              disabled={!postMessage}
              className={`${style.submitGeneral} ${
                postMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Post
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default PostBox