import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Success.scss";

export function Success() {
  return (
    <div id="success">
      <FontAwesomeIcon icon={faCheck} />
      <h2>განცხადება წარმატებით დაემატა</h2>
      <span>
        განცხადება საჭიროებს ვალიდაციას, ვალიდაციის პროცესს შესაძლოა 1 სამუშაო
        დღე დასჭირდეს, დასრულების შესახებ ინფორმაციას SMS შეტყობინების სახით
        მიიღებთ განცხადებაში მითითებულ ნომერზე, პატივისცემით Reklamebi.ge-ის
        ადმინისტრაცია. ℹ️ მოლოდინის სტატუსში მყოფი განცხადება დადასტურებამდე
        დამალულია საიტიდან
      </span>
      <button>განცხადების ნახვა</button>
      <Link to="/">მთავარი</Link>
    </div>
  );
}
