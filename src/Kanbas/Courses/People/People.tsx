import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as courseClient from "../client";
import PeopleTable from "./Table";

const People = () => {
  const { cid } = useParams();
  console.log("courseId in People component:", cid);
  const [users, setUsers] = useState([]);

  const fetchUsersForCourse = async () => {
    try {
      if (cid) {
        const users = await courseClient.findUsersForCourse(cid);
        setUsers(users);
      }
    } catch (error) {
      console.error("Error fetching users for course:", error);
    }
  };

  useEffect(() => {
    
    if (cid) {
      fetchUsersForCourse();
    }
  }, [cid]);

  return (
    <div>
      <h2>People</h2>
      <PeopleTable users={users} />
    </div>
  );
};

export default People;