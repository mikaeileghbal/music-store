import { useLocation } from "react-router";

export default function NotFound404() {
  const location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
