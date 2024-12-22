import { faMagnifyingGlass, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchNavbarInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <form
        className="w-full h-full flex flex-row items-center gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (search !== "") {
            console.log(search);
            navigate(`/search?query=${search}`);
            setSearch("");
          }
        }}
      >
        <Input
          variant="outlined"
          label="Search"
          icon={<FontAwesomeIcon icon={faRocket} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="submit" variant="outlined">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
      </form>
    </div>
  );
}
