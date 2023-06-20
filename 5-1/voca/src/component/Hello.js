import World from "./World";
import styles from "./Hello.module.css";

export default function Hello(){

    function showName() {
        console.log("Han");
    }
    function showAge(age) {
        console.log(age);
    } 
    function showText(e) {
        console.log(e.target.value); 
    }

    return (
    <div>
        <h1
        style={{
            color: "#f00",
            borderRight: "12px solid #000",
            marginBottom: "50px",
            opacity: 0.5,
        }}
        >
            Hello
        </h1>
        <div className={styles.box}>Hello</div> 
        <button onClick={showName}>Show name</button>
        <button onClick={() => { // 매개변수 전달할 때 편리함 
            console.log(50);
        }}
        >
        Show age
        </button>
        <input type="text" onChange={showText}/> 
        {/* onChange={e => { // 이렇게 작성 가능 
            console.log(e.target.value);
        }} */}

    </div>
    );
}   

