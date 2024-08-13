
const colors_1 = [
  { char: "E", color: "blue-500" },
  { char: "L", color: "yellow-500" },
  { char: "M", color: "orange-500" },
  { char: "O", color: "pink-500" },
  { char: "R", color: "green-500" },
  { char: "E", color: "blue-700" },
];

const colors_2 = [
  { char: "P", color: "red-500" },
  { char: "L", color: "purple-500" },
  { char: "U", color: "yellow-500" },
  { char: "S", color: "blue-500" },
];

export default function LogoMain() {
  return (
    <div className="fredoka-one-font p-auto flex justify-center items-center gap-1">
      <div className=" text-2xl flex justify-center items-center gap-2">
        <div>
          {colors_1.map((e) => {
            return (
              <span key={e.color + e.char} className={`text-${e.color}`}>
                {e.char}
              </span>
            );
          })}
        </div>
        <div>
          {colors_2.map((e) => {
            return (
              <span key={e.color + e.char} className={`text-${e.color}`}>
                {e.char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
