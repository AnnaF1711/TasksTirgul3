import React, {useState} from 'react';
import "./TodoList.css"
function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [index, setIndex] = useState(null);//if null then you dont want to edit anything
    const addTask = () => {
        if(index===null){//אתה לא מעדכן כלום...
            setTasks([...tasks, task]);//שלוש נקודות זה תשמור את מה שהיה קודם
        }else{
            const updatedTasks=tasks;//אם אינדקס לא נאל, כלומר אתה מעדכן משימה במשהו אחר
            updatedTasks[index]=task;//יוצרים מערך חדש ומחליפים ערך
            setTasks(updatedTasks);//מעדכנים את המערך החדש
            setIndex(null)//מחליפים חזרה את האינדקס לנאל במידה ונרצה לעדכן שוב מתישהו
        }
        setTask("")
    }
    const editTask = (index) => {
        setIndex(index);
        setTasks([tasks, index]);
    }
    const deleteTask = () => {
        setTasks(tasks.filter((task,i)=>i !==index))//עושה סינון, כל מי שעומד בתנאי והאינדקס לא שווה לi => הוא נשאר, אם שווה => נמחק
        setIndex(null);
    }


    return (
        <div>
            <h1>
                Todos List
            </h1>
            <input
                 type={"text"}
                 placeholder={"Add task..."}
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
            />
            <button disabled={task.trim()===""}
            onClick={addTask}>
                {
                    index===null?"Add"//פעמיים שווה בודק אם אותו ערך. 3 פעמים שווה בודק אם אותו ערך ואותו סוג. כמו '5' ו-5
                    :"Edit"
                }
            </button>
            {
                task.length>0 &&//שלא יציג כלום אם אין, משתמשים ב'וגם'
                (//יו אל זה רשימה לא ממוספרת
                    <ul>{//*יו אל זה בעצם אנאורדרד ליסט, פשוט רשימה לא ממוספרת, זה מערך בסופו של דבר, אנחנו רוצים שהיא תוצג לנו, ומה יהיה בה? מה שנכתוב בפנים בסוגריים המסולסלים*//
                        {
                            task.map((task, index) => //item->the object, index-> the index of our list
                            <li key={index}>
                                {task}
                                <button onClick={()=>editTask(index)}>Edit</button>
                                <button onClick={deleteTask}>Delete</button>
                                </li>
                            )
                        }
                    </ul>
                )
            }
        </div>
    )

}
export default TodoList