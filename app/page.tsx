"use client"
import { useEffect, useState } from "react";

export default function Home() {

  interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const allUsers = async () => {
    try {
      const res = await fetch('/api/user/all');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setUsers(data);
    } catch (err : any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
