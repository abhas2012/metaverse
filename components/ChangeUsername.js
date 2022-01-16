import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your new Username {current : ${user.getUsername()}}`
    );
    if (!username) return;
    setUserData({ username });
  };
  return (
    <div>
      <button
        className="text-sm absolute right-5 top-5 hover:text-pink-700"
        onClick={setUsername}>
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
