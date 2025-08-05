import {useState , useEffect} from "react"
import api from '../api'
import Note from "../components/Note.jsx"
import "../styles/Home.css"

function Home(){

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/core/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/core/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/core/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <>
        <br /><br />
        <div className="the-home"><h3>Home</h3></div>

        <br /><br />
        <div>
            <div>
                <h2>Notes:</h2>
                {console.log("Notes to render:", notes)}
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}

                {/* {notes.map((note, index) => (
    <div key={note?.id || index}>
        <h3>{note?.title || "No title"}</h3>
        <p>{note?.content || "No content"}</p>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        <hr />
    </div>
))} */}

            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br /><br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br /><br />
                <label htmlFor="content">Content:</label>
                <br /><br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br /><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        <br /><br />
        </>
        
    );
}

export default Home 