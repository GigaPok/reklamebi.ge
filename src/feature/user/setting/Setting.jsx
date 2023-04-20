import React, { useState } from "react";
import { Profile } from "../profile/Profile";
import { Mainlayout } from "../../../core";
import "./Setting.scss";
import { Link } from "react-router-dom";

export function Setting() {
  const [changePassword, setchangePassword] = useState(false);

  const [password, setPassword] = useState(true);
  const [username, setUsername] = useState(false);
  const [phone, setPhone] = useState(false);
  return (
    <div id="setting">
      <h2>პარამეტრები</h2>
      <div className="button-wrapper">
        <Link>
          <button
            onClick={() => setchangePassword(false)}
            className={changePassword ? "" : "active"}
          >
            პირადი ინფორმაცია
          </button>
        </Link>
        <Link>
          <button
            onClick={() => setchangePassword(true)}
            className={changePassword ? "active" : ""}
          >
            პაროლის შეცვლა
          </button>
        </Link>
      </div>
      {changePassword ? (
        <>
          <div className="infoCard">
            <div>
              <span>პაროლი</span>
              {password && <span>***********</span>}
            </div>
            <button onClick={() => setPassword(!password)}>
              {password ? "შეცვლა" : "გაუქმება"}
            </button>
          </div>
          {!password && (
            <form>
              <div>
                <input placeholder="ძველი პაროლი" />
                <input placeholder="ახალი პაროლი" />
                <input placeholder="გაიმეორე პაროლი" />
                <button type="submit" className="subbmit-btn">
                  განაახლე პაროლი
                </button>
              </div>
            </form>
          )}
        </>
      ) : (
        <>
          <div className="infoCard diff-card">
            <span>მეილი</span>
            <span>karkusashvili9999@gmail.com</span>
          </div>
          <div className="infoCard">
            <div>
              <span>სახელი, გვარი</span>
              {!username && <span>Giga Karkusashvili</span>}
              {username && (
                <form>
                  <input placeholder="Giga Karkusashvili" name="username" />
                  <button
                    type="submit"
                    onClick={() => setUsername(!username)}
                    className="subbmit-btn"
                  >
                    განაახლე სახელი, გვარი
                  </button>
                </form>
              )}
            </div>

            <button onClick={() => setUsername(!username)}>
              {username ? "გაუქმება" : "შეცვლა"}
            </button>
          </div>
          <div className="infoCard">
            <div>
              <span>მობილურის ნომერი</span>
              {!phone && <span>+995595268751</span>}
              {phone && (
                <form>
                  <input placeholder="+995595268751" name="phone" />
                  <button
                    type="submit"
                    onClick={() => setPhone(!phone)}
                    className="subbmit-btn"
                  >
                    განაახლე მობილურის ნომერი
                  </button>
                </form>
              )}
            </div>

            <button onClick={() => setPhone(!phone)}>
              {phone ? "გაუქმება" : "შეცვლა"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
