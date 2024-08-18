import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Paginationn from "./Pagination";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 5;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledButton = styled("button")(() => ({
  backgroundColor: "orange",
  color: "black",
  borderRadius: "15px",
  padding: "10px 16px",
  cursor: "pointer",
  zIndex: 4,
}));

export default function CustomizedTables() {
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPage = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPage = indexOfLastPage - ITEMS_PER_PAGE;
  const currentList = userList.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/getuser"
        );
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleBlockClick = async (userId, e) => {
    e.preventDefault();
    try {
      const block = await axios.put(
        `https://carrental-h251.onrender.com/api/admin/users/${id}`,
        { adminSuspended: true }

      );
      toast.success("user blocked")
    } catch (error) {
      console.log(error);
    }
   
  };

  const handleViewClick = (userId) => {
    console.log(`View details of user with ID: ${userId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CUSTOMER NAME</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentList.map((user, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user._id}</StyledTableCell>
              <StyledTableCell align="right">
                <StyledButton onClick={() => handleBlockClick(user._id)}>
                  Block
                </StyledButton>
                <StyledButton onClick={() => handleViewClick(user._id)}>
                  View
                </StyledButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Paginationn
        itemsPerPage={ITEMS_PER_PAGE}
        totalpages={userList.length}
        paginate={setCurrentPage}
        currentpage={currentPage}
      />
    </TableContainer>
  );
}
