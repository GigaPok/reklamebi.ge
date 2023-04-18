import React, { useState } from "react";
import "./AddStatement.scss";
import { Success } from "../succes/Success";

export function AddStatement() {
  const [steps, setSteps] = useState({
    oneStep: true,
    twoStep: false,
    threeStep: false,
    fourStep: false,
    fiveStep: false,
  });

  const lastStep = () => {
    setSteps({
      oneStep: false,
      twoStep: false,
      threeStep: false,
      fourStep: false,
      fiveStep: false,
      success: true,
    });
  };

  return (
    <div id="addStatement">
      {steps.success ? (
        <Success />
      ) : (
        <>
          <form>
            {steps.oneStep && (
              <>
                <div>
                  <h2>სახელი</h2>
                  <label>
                    მითითებული სახელი გამოჩნდება თქვენი განცხადების გვერდზე
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="სახელი"
                  />
                  <span>
                    მოცემულ ველში დაუშვებელია ციფრების და სპეციალური სიმბოლოების
                    გამოყენება
                  </span>
                </div>
                <div>
                  <h2>სათაური</h2>
                  <label>
                    სასურველია განცხადების დასახელება იყოს მოკლე და შინაარსიანი
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="სათაური"
                  />
                  <span>სათაური უნდა შედგებოდეს მაქსიმუმ 70 სიმბოლოსგან</span>
                </div>
                <div>
                  <h2>აღწერა</h2>
                  <label>
                    განცხადების აღწერა მნიშვნელოვანია საძიებო სისტემებისთვის
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="აღწერა"
                    rows={8}
                  />
                  <span>აღწერა უნდა შედგებოდეს მინიმუმ 50 სიმბოლოსგან</span>
                </div>
                <div>
                  <h2>საკონტაქტო ნომერი</h2>
                  <label>ავტომატურად გამოჩნდება მომსახურებაზე</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="საკონტაქტო ნომერი"
                  />
                  <span>ნომრის მითითება აუცილებელია</span>
                </div>
                <button
                  onClick={() =>
                    setSteps({
                      oneStep: false,
                      twoStep: true,
                      threeStep: false,
                      fourStep: false,
                      fiveStep: false,
                    })
                  }
                >
                  შემდეგი
                </button>
              </>
            )}
            {steps.twoStep && (
              <>
                <div>
                  <h2>აირჩიეთ კატეგორია</h2>
                  <label>
                    აირჩიეთ ან დაამატეთ მომსახურების შესაბამისი კატეგორია, რაც
                    პოტენციურ კლიენტებს გაუმარტივებს განცხადების პოვნას
                  </label>
                  <input
                    type="select"
                    select="name"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                  <span>
                    მოცემულ ველში დაუშვებელია ციფრების და სპეციალური სიმბოლოების
                    გამოყენება
                  </span>
                </div>
                <button
                  onClick={() =>
                    setSteps({
                      oneStep: false,
                      twoStep: false,
                      threeStep: true,
                      fourStep: false,
                      fiveStep: false,
                    })
                  }
                >
                  შემდეგი
                </button>
              </>
            )}
            {steps.threeStep && (
              <>
                <div>
                  <h2>
                    ჩაწერე სიტყვები რომლებზეც გინდა, რომ მოიძებნოს შენი
                    განცხადება
                  </h2>
                  <label>
                    საძიებო სიტყვების სწორად მითითების შემთხვევაში, თქვენ
                    მნიშვნელოვნად გაზრდით განცხადების უნიკალურ ნახვებს
                  </label>
                  <input
                    type="select"
                    select="name"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                  <span>
                    მოცემულ ველში დაუშვებელია ციფრების და სპეციალური სიმბოლოების
                    გამოყენება
                  </span>
                </div>
                <button
                  onClick={() =>
                    setSteps({
                      oneStep: false,
                      twoStep: false,
                      threeStep: false,
                      fourStep: true,
                      fiveStep: false,
                    })
                  }
                >
                  შემდეგი
                </button>
              </>
            )}
            {steps.fourStep && (
              <>
                <div>
                  <h2>განვადება</h2>
                  <label>მონიშნეთ “კი” თუ გაქვთ სერვისზე განვადება</label>
                  <div className="select-wrapper">
                    <span className="select">
                      <span>კი</span>
                    </span>
                    <span className="select">
                      <span>არა</span>
                    </span>
                  </div>
                  <input
                    type="hidden"
                    select="select"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                </div>
                <div>
                  <h2>გარანტია</h2>
                  <label>მონიშნეთ “კი” თუ გაქვთ სერვისზე გარანტია</label>
                  <div className="select-wrapper">
                    <span className="select">
                      <span>კი</span>
                    </span>
                    <span className="select">
                      <span>არა</span>
                    </span>
                  </div>
                  <input
                    type="hidden"
                    select="select"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                </div>
                <div>
                  <h2>გადახდის მეთოდები</h2>
                  <label>
                    ანგარიშსწორებისთვის აირჩიეთ სასურველი გადახდის მეთოდი
                  </label>
                  <div className="select-wrapper">
                    <span className="select">
                      <span>ნაღდი ფულით</span>
                    </span>
                    <span className="select">
                      <span>ბარათით</span>
                    </span>
                    <span className="select">
                      <span>გადარიცხვით</span>
                    </span>
                  </div>
                  <input
                    type="hidden"
                    select="select"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                </div>
                <div>
                  <h2>მომსახურების ღირებულება</h2>
                  <label>მიუთითეთ მომსახურების “თანხა”</label>
                  <div className="select-wrapper">
                    <span className="select">
                      <span>ფასი შეთანხმებით</span>
                    </span>
                    <span className="select">
                      <span>კონკრეტული</span>
                    </span>
                  </div>
                  <input
                    type="hidden"
                    select="select"
                    id="select"
                    placeholder="დაიწყე აკრეფა"
                  />
                </div>
                <button
                  onClick={() =>
                    setSteps({
                      oneStep: false,
                      twoStep: false,
                      threeStep: false,
                      fourStep: false,
                      fiveStep: true,
                    })
                  }
                >
                  შემდეგი
                </button>
              </>
            )}
            {steps.fiveStep && (
              <>
                <div>
                  <h2>აირჩიე მდებარეობა</h2>
                  <label form="location">აირჩიე ქალაქი</label>
                  <select name="location" id="location">
                    <option value="tbilisi">თბილისი</option>
                    <option value="Batumi">ბათუმი</option>
                    <option value="Telavi">თელავი</option>
                    <option value="Qutaisi">ქუთაისი</option>
                  </select>
                </div>
                <div>
                  <h2>მისამართი</h2>
                  <label>მისამართი (არა სავალდებულო)</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="მისამართი"
                  />
                </div>
                <button onClick={lastStep}>განცხადების დამატება</button>
              </>
            )}
          </form>
          <div className="preview"></div>
        </>
      )}
    </div>
  );
}
