import { useChat } from "ai/react"
import { BsFillSendFill } from "react-icons/bs"
import { SyncLoader } from "react-spinners"

export default function IndexPopup() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages
  } = useChat({
    api: "http://localhost:3000/api/chat"
  })

  const submitHandler = (e) => {
    setMessages([])
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <h1 style={{margin: 3}}>Ask AI</h1>
      </div>
      <div style={styles.messageConatiner}>
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? (
              <div style={styles.responseContainer}>
                <h4 style={styles.responseHeadingTxt}>You: &ensp;</h4>{" "}
                {m.content}
              </div>
            ) : null}
            {m.role === "assistant" ? (
              <div style={styles.responseContainer}>
                <h4 style={styles.responseHeadingTxt}>AI: &ensp;</h4>{" "}
                {m.content}
              </div>
            ) : null}
          </div>
        ))}
      {isLoading && <SyncLoader size={10} margin={5} color="#36d7b7" />}
      </div>
      <form onSubmit={submitHandler}>
        <div style={styles.formContainer}>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Something..."
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            <BsFillSendFill size={25} />
          </button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  container: {
    width: 500,
    height: 500
  },
  heading: {
    textAlign: "center",
    background: "#8CDEB6",
    margin: 0,
    padding: 1,
    border: "5px solid #E7DFC6",
    borderRadius: 10
  },
  messageConatiner: {
    fontSize: 16,
    margin: 10,
    height: 350,
    overflowY: "auto",
  },
  responseHeadingTxt: {
    marginBottom: 5
  },

  responseContainer: {
    display: "flex",
    flexDirection: "column"
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  
  },
  button: {
    marginLeft: 10,
    padding: 20,
    borderRadius: 10,
    border: "1px solid #ccc",
    cursor: "pointer",
    width: 100,
    background: "lightgreen"
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ccc"
  }
}
