import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { useAddContactMutation, useUpdateContactMutation } from "../../services/contactsApi";
import { Contact } from "../../models/contact.model";
import { nanoid } from "@reduxjs/toolkit";
import { ShowHideWithId } from "../../models/contact.model";

const RtcQueryDemoUiAddUser: React.FC<any> = (props) => {

  const {setShowAddUserPost, showAddUserPost} = props;

const [newTitleText, setNewTitleText]  = useState<string>(showAddUserPost?.contact ? showAddUserPost?.contact?.title : "")

  const [addContact] = useAddContactMutation() 
  const [updateContact] = useUpdateContactMutation()

  const handlePost = async(event:any)=>{
    event.preventDefault()
    const payLoad : Contact = {
      userId: 1,
      id: Number(nanoid()),
      title: newTitleText,
      completed: true
    }
      await addContact(payLoad)
      setShowAddUserPost((prev:ShowHideWithId)=>({show: !prev.show, contact: null}))
  }

  const handleUpdatePost = async(event:any)=>{
    event.preventDefault()
    const payLoad : Contact = {
      ...showAddUserPost.contact, title: newTitleText
    }
      await updateContact(payLoad)
      setShowAddUserPost((prev:ShowHideWithId)=>({show: !prev.show, contact: null}))
  }

  // "userId": number,
  // "id": number,
  // "title": string,
  // "completed": boolean

  return (
    <div className={styles.rtcContainer}>
      <div style={{marginBottom: "2vw"}}>RTC DEMO ADD USER</div>
      <form>
        <label>Enter Title</label>
        <input type="text" onChange={(e)=> setNewTitleText(e.target.value) } value={newTitleText}/>
        <button onClick={showAddUserPost?.contact ? handleUpdatePost : handlePost}>{showAddUserPost?.contact ? "Update Post" : "Add Post"}</button>
      </form>
    </div>
  );
};

export default RtcQueryDemoUiAddUser;
