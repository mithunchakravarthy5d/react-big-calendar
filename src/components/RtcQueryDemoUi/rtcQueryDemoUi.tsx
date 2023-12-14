import React, { useState } from "react";
import styles from "./styles.module.css";
import { useContactsQuery, useContactQuery, useDeleteContactMutation } from "../../services/contactsApi";
import RtcQueryDemoUiAddUser from "../RtcQueryDemoUiAddUser";
import { ShowHideWithId } from "../../models/contact.model";



const RtcQueryDemoUi: React.FC<any> = () => {
  const { data, isLoading, isFetching, isSuccess, error } = useContactsQuery();
  const [showAddUserPost, setShowAddUserPost] = useState<ShowHideWithId>({show: false, contact: null});

  const [deleteContact] = useDeleteContactMutation();

  const handleDlete = async(id: number)=>{
  await deleteContact(id)
  }

  return (
    <>
      {!showAddUserPost.show ? (
        <div className={styles.rtcContainer}>
          <div>RTC DEMO</div>
          <div>
            <button onClick={() => setShowAddUserPost((prev:ShowHideWithId)=>({show: !prev.show, contact: null}))}>
              Add User Post
            </button>
          </div>
          {isLoading && <h1>...Loading</h1>}
          {isFetching && <h1>...Fetching</h1>}
          {error && <h1>...Something went wrong</h1>}
          {isSuccess && (
            <div style={{display: "flex", flexDirection: "column", rowGap: "2vw",width: "30vw"}}>
              {data?.map((contact) => {
                return (
                  <div key={contact?.id} style={{display: "flex", padding: "2%", background: "#FFD26B", columnGap: "2vw", justifyContent: "space-between"}}>
                    <div>{contact?.title}</div>
                    <div>
                    <button onClick={() => setShowAddUserPost((prev:ShowHideWithId)=>({show: !prev.show, contact}))}>Edit</button>
                    <button onClick={()=>handleDlete(contact?.id)}>Delete</button>
                    </div>
                    {/* <div>
                      <SingleContactDetails id={contact?.id} />
                    </div> */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <RtcQueryDemoUiAddUser setShowAddUserPost={setShowAddUserPost} showAddUserPost={showAddUserPost}/>
      )}
    </>
  );
};

export const SingleContactDetails = ({ id }: { id: number }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default RtcQueryDemoUi;
