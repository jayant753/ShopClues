import { useState, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Signindropdown from "../signin/signindropdown";
import Modal from "../signin/modal";

const Navbar = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
    }
  };

  const handleMouseEnter = ()=>{
    setShowComponent(true);
  }

  const handleMouseLeave = ()=>{
    setShowComponent(false);
  }

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <nav>
        <div className="w-full h-[61px]  flex items-center justify-between pr-32 pl-32">
          <Link to='/'>
          <div className="">
            <img
              className="w-[133px] h-[22.61px] cursor-pointer"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIzIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDgyMyAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3LjkzMi43OTJjMzcuNDMyIDAgNjcuNzg2IDMxLjE1IDY3Ljc1MiA2OS41Mi0uMDYgMzcuNzA3LTMwLjY2NiA2OC42OS02Ny45MjUgNjguNjgzLTM3LjQ0NiAwLTY3Ljc5OS0zMS4xNDktNjcuNzU5LTY5LjUyQy4wMDcgMzEuNzgyIDMwLjY2Ljc4NSA2Ny45MzIuNzkyeiIgZmlsbD0iIzA1QTJCMyIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuNDY0IDM4LjYzYy0uNTM5IDEuMDE4LTMxLjc3IDQ0Ljk3Ni00OS44MTUgNjUuNDMxLTQuMjcxIDQuODM1LTExLjQzNyA0Ljk2MS0xNS43MDItLjI1Mi05Ljg2Ny0xMi4wNS0xNy44MzgtMjIuNTExLTI3LjA5My0zNy4wNDgtMS4yNzctMS45OTUtMi44NTQtNC44NzUtLjU2Ni03LjM5NSAwIDAgMi41MjItMi44MDcgNy45ODUgMS4wNSA2Ljk0IDQuODk1IDE0LjMyNSA5LjY3NyAyMS4xMzggMTQuMjE5IDMuODk5IDIuNTkzIDYuMzg3IDIuODIgOS45OC4wMzNDNzMuNTI4IDYyLjk2MyAxMDcuNDYgMzcuNzIgMTA5LjM5IDM2LjU0MmMzLjQwNi0yLjA2OCAzLjgzOS41MiAzLjAyNyAyLjA4OWguMDQ3eiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuNDY0IDM4LjYzYy0uNTM5IDEuMDE4LTMxLjc3IDQ0Ljk3Ni00OS44MTUgNjUuNDMxLTQuMjcxIDQuODM1LTExLjQzNyA0Ljk2MS0xNS43MDItLjI1Mi05Ljg2Ny0xMi4wNS0xNy44MzgtMjIuNTExLTI3LjA5My0zNy4wNDgtMS4yNzctMS45OTUtMi44NTQtNC44NzUtLjU2Ni03LjM5NSAwIDAgMi41MjItMi44MDcgNy45ODUgMS4wNSA2Ljk0IDQuODk1IDE0LjMyNSA5LjY3NyAyMS4xMzggMTQuMjE5IDMuODk5IDIuNTkzIDYuMzg3IDIuODIgOS45OC4wMzNDNzMuNTI4IDYyLjk2MyAxMDcuNDYgMzcuNzIgMTA5LjM5IDM2LjU0MmMzLjQwNi0yLjA2OCAzLjgzOS41MiAzLjAyNyAyLjA4OWguMDQ3eiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggZD0iTTc5NS43MDIgNjIuMTk5Yy0xLjc3LjUyNS0zLjQyIDEuMzktNC44NTcgMi41NDdhMTAuOTcgMTAuOTcgMCAwIDAtMy4wMTQgMy45OSAxMy4xODQgMTMuMTg0IDAgMCAwLTEuMDM4IDUuMzIgMTEuODA1IDExLjgwNSAwIDAgMCAxLjI3MSA1LjY0NiAxMS4zODUgMTEuMzg1IDAgMCAwIDMuMzggMy45MyAxNC41MyAxNC41MyAwIDAgMCA0LjkwMyAyLjI4OCAyMy41MjUgMjMuNTI1IDAgMCAwIDExLjgxIDAgMTQuMjg2IDE0LjI4NiAwIDAgMCA0Ljg3Ny0yLjI4OCAxMS4xNzcgMTEuMTc3IDAgMCAwIDMuMzI3LTMuOTIzIDEyLjQ4OCAxMi40ODggMCAwIDAgMS4yMjQtNS43NiAxMi4yNTUgMTIuMjU1IDAgMCAwLTEuMjUxLTUuNzEyIDExLjI5OSAxMS4yOTkgMCAwIDAtMy4zMjctMy45MjMgMTQuNjQyIDE0LjY0MiAwIDAgMC00Ljg4My0yLjI4OCAyMi40MTUgMjIuNDE1IDAgMCAwLTUuODc1LS43NTIgMjIuMDYgMjIuMDYgMCAwIDAtNi41MjEuODkybC0uMDI2LjAzM3ptLTExLjc4NCAxOS41MjVhMTcuMjIxIDE3LjIyMSAwIDAgMS0xLjU3Ni03LjUxNSAxOC4yOTEgMTguMjkxIDAgMCAxIDEuNTUtNy43NCAxNS42NCAxNS42NCAwIDAgMSA0LjI3OC01LjU4NyAxOC40OTMgMTguNDkzIDAgMCAxIDYuMzQ3LTMuMzY1IDI3LjAxMyAyNy4wMTMgMCAwIDEgMTUuMzAzIDAgMTguODMxIDE4LjgzMSAwIDAgMSA2LjI5NSAzLjMyNSAxNS44MjQgMTUuODI0IDAgMCAxIDQuMzA0IDUuNTQ2IDE5LjMzNCAxOS4zMzQgMCAwIDEgMCAxNS4zMjkgMTUuODY0IDE1Ljg2NCAwIDAgMS00LjMwNCA1LjU0IDE4LjQyIDE4LjQyIDAgMCAxLTYuMjk1IDMuMzI1IDI2LjExMSAyNi4xMTEgMCAwIDEtNy42MDUgMS4wOSAyNS43OSAyNS43OSAwIDAgMS03LjY3OC0xLjExNyAxOC43NzMgMTguNzczIDAgMCAxLTYuMzItMy4zMjUgMTYuMDY2IDE2LjA2NiAwIDAgMS00LjMwNS01LjQ4NmwuMDA2LS4wMnptMzYuOTAxIDM0LjEwOC0uMDc0LS4yMTNhMTQuNjM1IDE0LjYzNSAwIDAgMC0yLjkyLTQuNzY4IDE0Ljg5IDE0Ljg5IDAgMCAwLTQuMjY1LTMuMTcyIDIzLjgwOSAyMy44MDkgMCAwIDAtNS4wODQtMS44MDJsLS44MzEtLjE4Ni4wNzMgNS4zMi41MTkuMTJjMS4zMzUuMzAyIDIuNjI0Ljc4IDMuODMyIDEuNDIzYTExLjgzOCAxMS44MzggMCAwIDEgMi45ODEgMi4yODcgOS45NTcgOS45NTcgMCAwIDEgMS45NDkgMy4xMTljLjM3OSAxLjEzNC41NjggMi4zMjMuNTU5IDMuNTE4YTExLjU3NiAxMS41NzYgMCAwIDEtMS4zMyA1LjgxMiAxMC40MSAxMC40MSAwIDAgMS0zLjQ1MyAzLjY3MSAxNS4yOTkgMTUuMjk5IDAgMCAxLTQuOTU3IDEuOTk1Yy0zLjg1Mi44MzMtNy44NC43OTktMTEuNjc3LS4wOTlhMTQuNzkxIDE0Ljc5MSAwIDAgMS00Ljg1MS0yLjE1NSAxMC41OTQgMTAuNTk0IDAgMCAxLTMuMzI2LTMuNjQ0IDEwLjgxNCAxMC44MTQgMCAwIDEtMS4yMTEtNS4yNzQgMTUuODY4IDE1Ljg2OCAwIDAgMSAuNDUyLTMuOTQzIDkuNTQ1IDkuNTQ1IDAgMCAxIDEuMjMxLTIuNjYxYzEuMjExLTEuNzc1IDMuMzI3LTMuMDA1IDYuMjA4LTMuNjc3bC41MzktLjExM3YtLjM5MmguMDY2di00LjgxNWwtLjc3MS4xMmExNS40MjYgMTUuNDI2IDAgMCAwLTUuMTUgMS43MDIgMTIuNDA3IDEyLjQwNyAwIDAgMC0zLjc3OSAzLjE2NSAxMi44NDggMTIuODQ4IDAgMCAwLTEuOTIzIDMuMzcyYy0uMjE3LjQ5LS40MDYuOTkyLS41NjYgMS41MDNhMTguNDgzIDE4LjQ4MyAwIDAgMC0uNzU4IDUuMzggMjEuNTc4IDIxLjU3OCAwIDAgMCAxLjA3MSA2LjkzNiAxNC4xMTYgMTQuMTE2IDAgMCAwIDMuNTA2IDUuNjEzIDE2LjQ5OCAxNi40OTggMCAwIDAgNi4xODEgMy43MjQgMjcuNTU5IDI3LjU1OSAwIDAgMCA5LjA3NiAxLjMzYzIuNTMuMDEyIDUuMDUzLS4yODUgNy41MTEtLjg4NWExOC4yMzcgMTguMjM3IDAgMCAwIDYuMzM1LTIuODU5IDE0LjQ5MyAxNC40OTMgMCAwIDAgNC4zNzEtNS4xMTQgMTYuMTQ5IDE2LjE0OSAwIDAgMCAxLjYxNy03LjQ4MSAxOC40NzMgMTguNDczIDAgMCAwLTEuMDg1LTYuNTkxIDIuNjczIDIuNjczIDAgMCAwLS4xMDYtLjIzOWwuMDQtLjAyN3ptLTM3LjMzMy03NS4wMjdoMzcuMzc5di0uMzMyaC4xOHYtNC43ODhoLTI4LjQ4NGwyOC4zMDQtMTAuNDQxdi0uNDE5bC4xOC0uMDY2di00LjE3bC0yNy44NTItMTAuMjQxaDI3LjY3MnYtLjY2NWguMThWNC44OTVINzgzLjN2Ni4zNTdsLjE4Ni4wNnYuNTU5TDgxMy41IDIyLjgzbC0zMC4yIDExLjIyNXY2LjM5MWguMTg2VjQwLjgwNXptLTU1LjQzNy00LjgyOGMwLTcuMjI4IDAtMTMuNDg2IDYuODQ3LTEzLjQ4NiA2Ljg0NiAwIDYuODM5IDcuOTggNi44MzkgMTMuODc5IDAgMi45MzIuOTg1IDMuOTEgMy45MTMgMy45MWgxNS40NTZjMi45MzQgMCAzLjkxMi0xLjk1NSAzLjkxMi00Ljg4MSAwLTIxLjExNC0xMC4xNjctMzUuMTkzLTMxLjA5OC0zNS4xOTMtMTkuNTU1IDAtMjkuMzM2IDEzLjA5NC0yOS4zMzYgMzAuNjkgMCAxNS40NDIgMS45NTcgMjIuNjc4IDIwLjczMyA0NC43NjMgMTAuMzY2IDEyLjEyMyAxNi4yMzQgMjAuMTM2IDE2LjIzNCAyNy41NjUgMCA3LjIyOCAwIDEzLjQ3OS02Ljg0NiAxMy40NzktNi44NDcgMC02Ljg0LTcuOTgtNi44NC0xMy44NzggMC0yLjkzMy0uOTg1LTMuOTEtMy45MTItMy45MWgtMTUuNDYzYy0yLjkzNCAwLTMuOTEyIDEuOTU0LTMuOTEyIDQuODg3IDAgMjEuMTIxIDEwLjE2NiAzNS4xOTMgMzEuMDk4IDM1LjE5MyAxOS41NTUgMCAyOS4zMzUtMTMuMDk0IDI5LjMzNS0zMC42OTcgMC0xNS40MzUtMS43NTYtMjIuNjc3LTIwLjUzMi00NC43NjMtMTAuMzczLTEyLjExNi0xNi40MzQtMjAuMTMtMTYuNDM0LTI3LjU1OGguMDA2em0tNzguNDExIDEwMi4wNGg0Mi4yMTZjMi45MzUgMCAzLjkxMy0uOTc3IDMuOTEzLTMuOTF2LTE0LjQ3MWMwLTIuOTMzLS45NzgtMy45MDQtMy45MTMtMy45MDRoLTE4Ljc3NmMtMy45MTIgMC0zLjkxMiAwLTMuOTEyLTMuOTFWODAuOTM5YzAtMy45MSAwLTMuOTEgMy45MTItMy45MWgxOC43NzZjMi45MzUgMCAzLjkxMy0uOTc4IDMuOTEzLTMuOTFWNTguNjQ3YzAtMi45MjYtLjk3OC0zLjkwNC0zLjkxMy0zLjkwNGgtMTguNzc2Yy0zLjkxMiAwLTMuOTEyIDAtMy45MTItMy45MVYyNy4zNzJjMC0zLjkwNCAwLTMuOTA0IDMuOTEyLTMuOTA0aDE4Ljc3NmMyLjkzNSAwIDMuOTEzLS45NzcgMy45MTMtMy45MVY1LjA5NGMwLTIuOTMzLS45NzgtMy45MS0zLjkxMy0zLjkxaC00Mi4yMzZjLTIuOTQxIDAtMy45MTIuOTc3LTMuOTEyIDMuOTF2MTI5LjAxM2MwIDMuOTEgMS45NTYgMy45MSAzLjkxMiAzLjkxaC4wMnpNNjEwLjUyMiA1LjA5NHY5NS41ODljMCA5Ljc2OSAwIDE2LjAyLTYuODQ2IDE2LjAycy02Ljg0Ni02LjI1MS02Ljg0Ni0xNi4wMlY1LjA5NGMwLTIuOTMzLS45NzktMy45MS0zLjkxMy0zLjkxaC0xNS42NDJjLTIuOTM0IDAtMy45MTIuOTc3LTMuOTEyIDMuOTF2OTQuNzk4YzAgMjkuNTIgMTAuNzU4IDM5LjEwMyAzMC4zMTMgMzkuMTAzczMwLjI5My05Ljc4MyAzMC4yOTMtMzkuMTAzVjUuMDk0YzAtMi45MzMtLjk3MS0zLjkxLTMuOTEyLTMuOTFoLTE1LjYzNmMtMi45MzQgMC0zLjkxMi45NzctMy45MTIgMy45MWguMDEzem0tODcuMjI3IDEzMi45MjNoNDEuMjUyYzIuOTM0IDAgMy45MTktLjk3NyAzLjkxOS0zLjkxdi0xNC40NzFjMC0yLjkzMy0uOTg1LTMuOTA0LTMuOTE5LTMuOTA0aC0xNy41ODVjLTQuMTA1IDAtNC4xMDUgMC00LjEwNS00LjEwM1Y1LjA5NGMwLTIuOTMzLS45NzItMy45MS0zLjkxOS0zLjkxaC0xNS42NDNjLTIuOTM0IDAtMy45MDUuOTc3LTMuOTA1IDMuOTF2MTI5LjAxM2MwIDIuOTMzLjk3MSAzLjkxIDMuOTA1IDMuOTF6TTQ3MC41IDM4LjMyNWMwLTkuNzcgMC0xNi4wMzQgNi44NDctMTYuMDM0IDYuODQ2IDAgNi44NDYgNi4yNjUgNi44NDYgMTYuMDM0djUuODU5YzAgMi45MzkuOTcxIDMuOTEgMy45MTIgMy45MWgxNS42MzZjMi45NDEgMCAzLjkxMi0uOTcxIDMuOTEyLTMuOTF2LTUuMDg4QzUwNy42NTMgOS43NyA0OTYuOTAxIDAgNDc3LjM0NyAwYy0xOS41NTUgMC0zMC4zNCA5LjU4My0zMC4zNCAzOS4wOTZWOTkuODhjMCAyOS41MiAxMC43NTggMzkuMTAyIDMwLjMyIDM5LjEwMiAxOS41NjEgMCAzMC4zMDYtOS43ODIgMzAuMzA2LTM5LjEwMnYtNC44ODJjMC0yLjkzMi0uOTcxLTMuOTEtMy45MTItMy45MWgtMTUuNjM2Yy0yLjk0MSAwLTMuOTEyLjk3OC0zLjkxMiAzLjkxdjUuNjczYzAgOS43NjkgMCAxNi4wMi02Ljg0NiAxNi4wMi02Ljg0NyAwLTYuODQ3LTYuMjUxLTYuODQ3LTE2LjAyVjM4LjMyNWguMDJ6TTM5OC4xNDQgMjYuNGMwLTMuOTEgMC0zLjkxIDMuOTEyLTMuOTEgOS43NzQgMCA5Ljc3NCA5Ljk3NSA5Ljc3NCAxOS45NXY4Ljc5MmMwIDkuOTc1IDAgMTkuOTUtOS43NzQgMTkuOTUtMy45MTIgMC0zLjkxMiAwLTMuOTEyLTMuNTE4VjI2LjQwMXptMzcuMTUzIDI3LjE3M3YtMTMuM2MwLTI5LjMyOC0xMy42ODctMzkuMDk3LTMzLjI2OC0zOS4wOTdoLTIzLjQ0N2MtMi45MzQgMC0zLjkxMi45NzgtMy45MTIgMy45MVYxMzQuMWMwIDIuOTMzLjc4NSAzLjkxIDMuOTEyIDMuOTFoMTUuNjQ5YzIuNzM1IDAgMy45MTMtLjk3NyAzLjkxMy0zLjkxVjk2LjM4YzAtMy45MSAwLTMuOTEgMy45MTItMy45MSAxOS41NTQgMCAzMy4yNjctOS43NzUgMzMuMjY3LTM4Ljg5NmgtLjAyNnptLTk1LjgxLTE0Ljg1N3Y2MS45NjZjMCA5Ljc2OSAwIDE2LjAyLTYuODQ3IDE2LjAyLTYuODQ2IDAtNi44NC02LjI1MS02Ljg0LTE2LjAyVjM4LjcxN2MwLTkuOTc1IDAtMTYuMjI2IDYuODQtMTYuMjI2czYuODQ3IDYuMjU4IDYuODQ3IDE2LjIyNnptMjMuNDY2IDYxLjE4MVYzOS4zMDNjMC0yOS4zMjctMTAuNzUyLTM5LjA5Ni0zMC4zMTMtMzkuMDk2cy0zMC4zMTMgOS41NzYtMzAuMzEzIDM5LjA5NnY2MC41OWMwIDI5LjUyIDEwLjc1OSAzOS4xMDMgMzAuMzEzIDM5LjEwMyAxOS41NTUgMCAzMC4zMTMtOS43ODMgMzAuMzEzLTM5LjEwM3YuMDA3em0tOTEuOTMxIDM4LjExOWgxNS42MzZjMS45NTYgMCAzLjkxMiAwIDMuOTEyLTMuOTFWNS4wOTRjMC0yLjkzMy0uOTc4LTMuOTEtMy45MTItMy45MWgtMTUuNjM2Yy0yLjkyNyAwLTMuOTA1Ljk3Ny0zLjkwNSAzLjkxdjQ1Ljc0YzAgMy45MSAwIDMuOTEtMy45MTIgMy45MWgtNS44NjJjLTMuOTEyIDAtMy45MTIgMC0zLjkxMi0zLjkxVjUuMDk0YzAtMi45MzMtLjk3OC0zLjkxLTMuOTEzLTMuOTFoLTE1LjY1NWMtMi45MjggMC0zLjkxMi45NzctMy45MTIgMy45MXYxMjkuMDEzYzAgMy45MSAxLjk5NiAzLjkxIDMuOTEyIDMuOTFoMTUuNjU1YzEuOTU3IDAgMy45MTMgMCAzLjkxMy0zLjkxVjgwLjkwNmMwLTMuOTEgMC0zLjkxIDMuOTEyLTMuOTFoNS44NjJjMy45MTIgMCAzLjkxMiAwIDMuOTEyIDMuOTF2NTMuMjAxYzAgMy45MSAxLjk1NiAzLjkxIDMuOTA1IDMuOTF6bS04Ni44MjctMTAyLjA0YzAtNy4yMjggMC0xMy40ODYgNi44NTMtMTMuNDg2czYuODQ2IDcuOTggNi44NDYgMTMuODc5YzAgMi45MzIuOTcyIDMuOTEgMy45MDYgMy45MWgxNS40NDljMi45MzQgMCAzLjkwNi0xLjk1NSAzLjkwNi00Ljg4MSAwLTIxLjExNC0xMC4xNi0zNS4xOTMtMzEuMDg1LTM1LjE5My0xOS41NjggMC0yOS4zNDIgMTMuMDk0LTI5LjM0MiAzMC42OSAwIDE1LjQ0MiAxLjk2MyAyMi42NzggMjAuNzM5IDQ0Ljc2MyAxMC4zNTkgMTIuMTIzIDE2LjIyOCAyMC4xMzYgMTYuMjI4IDI3LjU2NSAwIDcuMjI4IDAgMTMuNDc5LTYuODQ3IDEzLjQ3OS02Ljg0NiAwLTYuODQ2LTcuOTgtNi44NDYtMTMuODc4IDAtMi45MzMtLjk3OC0zLjkxLTMuOTA2LTMuOTFIMTY0LjY0Yy0yLjkzNCAwLTMuOTEyIDEuOTU0LTMuOTEyIDQuODg3IDAgMjEuMTIxIDEwLjE2NiAzNS4xOTMgMzEuMDk4IDM1LjE5MyAxOS41NTUgMCAyOS4zMjktMTMuMDk0IDI5LjMyOS0zMC42OTcgMC0xNS40MzUtMS43NTctMjIuNjc3LTIwLjUzMy00NC43NjMtMTAuMzU5LTEyLjExNi0xNi40MjctMjAuMTMtMTYuNDI3LTI3LjU1OHptNTgzLjI0MyA5NS45NTVoNy4wNjZ2Ny4wNjNoLTcuMDY2di03LjA2M3oiIGZpbGw9IiMxRDFEMUIiLz4KPC9zdmc+Cg=="
              alt="ShopClues"
            />
          </div>
          </Link>
          <div className="flex items-center border rounded-lg overflow-hidden text-gray-700 bg-[#e9f6f7] w-[1040px] h-[40px]">
      <button className="pl-2 text-gray-700 bg-[#e9f6f7]">
        <IoSearchOutline />
      </button>
      <input
        type="text"
        className="px-4 py-2 w-full text-gray-700 bg-[#e9f6f7] focus:outline-none"
        placeholder="What is on your mind today?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-[#ff8750] text-white">
        Search
      </button>
    </div>
          <div className="flex gap-4 items-center pr-16">
            <div>
              <div className="text-[12px] text-[#212121]">Share</div>
              <div className="flex text-[11px] text-[#21A3B5] cursor-pointer hover:underline">
                Location
                <span className="text-[15px] cursor-default">
                  <SlLocationPin />
                </span>
              </div>
            </div>
            <div>
              <IoMdNotificationsOutline className="text-[24px] text-[#21A3B5] cursor-pointer" />
            </div>
            <div>
              <IoIosHeartEmpty className="text-[24px] text-[#21A3B5] cursor-pointer" />
            </div>
            <div>
              <IoCartOutline className="text-[24px] text-[#21A3B5] cursor-pointer" />
            </div>
            <div className="relative">
            {user ? (
                <div
                  className="text-[#212121] text-[16px] cursor-pointer hover:underline"
                  onMouseEnter={handleMouseEnter}
                >
                  Hi, {user.firstname}
                </div>
              ) : (
                <div
                  className="text-[#212121] text-[16px] cursor-pointer hover:underline"
                  onMouseEnter={handleMouseEnter}
                  onClick={() => setShowModal(true)}
                >
                  Sign In
                </div>
              )}
              {showComponent && (
                <div className="absolute right-0">
                  <Signindropdown handleMouseLeave={handleMouseLeave} setShowModal={setShowModal} />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;










































// import { useState, useEffect } from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { SlLocationPin } from "react-icons/sl";
// import { IoSearchOutline } from "react-icons/io5";
// import Signindropdown from "../signin/signindropdown";
// import Modal from "../signin/modal";

// const Navbar = () => {
//   const [showComponent, setShowComponent] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const userData = localStorage.getItem("user");
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   }
  // }, []);

//   const handleMouseEnter = () => {
//     setShowComponent(true);
//   };

//   const handleMouseLeave = () => {
//     setShowComponent(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <>
//       <nav>
//         <div className="w-full h-[61px] flex items-center justify-between pr-32 pl-32">
//           <div className="">
//             <img
//               className="w-[133px] h-[22.61px] cursor-pointer"
//               src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIzIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDgyMyAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3LjkzMi43OTJjMzcuNDMyIDAgNjcuNzg2IDMxLjE1IDY3Ljc1MiA2OS41Mi0uMDYgMzcuNzA3LTMwLjY2NiA2OC42OS02Ny45MjUgNjguNjgzLTM3LjQ0NiAwLTY3Ljc5OS0zMS4xNDktNjcuNzU5LTY5LjUyQy4wMDcgMzEuNzgyIDMwLjY2Ljc4NSA2Ny45MzIuNzkyeiIgZmlsbD0iIzA1QTJCMyIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuNDY0IDM4LjYzYy0uNTM5IDEuMDE4LTMxLjc3IDQ0Ljk3Ni00OS44MTUgNjUuNDMxLTQuMjcxIDQuODM1LTExLjQzNyA0Ljk2MS0xNS43MDItLjI1Mi05Ljg2Ny0xMi4wNS0xNy44MzgtMjIuNTExLTI3LjA5My0zNy4wNDgtMS4yNzctMS45OTUtMi44NTQtNC44NzUtLjU2Ni03LjM5NSAwIDAgMi41MjItMi44MDcgNy45ODUgMS4wNSA2Ljk0IDQuODk1IDE0LjMyNSA5LjY3NyAyMS4xMzggMTQuMjE5IDMuODk5IDIuNTkzIDYuMzg3IDIuODIgOS45OC4wMzNDNzMuNTI4IDYyLjk2MyAxMDcuNDYgMzcuNzIgMTA5LjM5IDM2LjU0MmMzLjQwNi0yLjA2OCAzLjgzOS41MiAzLjAyNyAyLjA4OWguMDQ3eiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuNDY0IDM4LjYzYy0uNTM5IDEuMDE4LTMxLjc3IDQ0Ljk3Ni00OS44MTUgNjUuNDMxLTQuMjcxIDQuODM1LTExLjQzNyA0Ljk2MS0xNS43MDItLjI1Mi05Ljg2Ny0xMi4wNS0xNy44MzgtMjIuNTExLTI3LjA5My0zNy4wNDgtMS4yNzctMS45OTUtMi44NTQtNC44NzUtLjU2Ni03LjM5NSAwIDAgMi41MjItMi44MDcgNy45ODUgMS4wNSA2Ljk0IDQuODk1IDE0LjMyNSA5LjY3NyAyMS4xMzggMTQuMjE5IDMuODk5IDIuNTkzIDYuMzg3IDIuODIgOS45OC4wMzNDNzMuNTI4IDYyLjk2MyAxMDcuNDYgMzcuNzIgMTA5LjM5IDM2LjU0MmMzLjQwNi0yLjA2OCAzLjgzOS41MiAzLjAyNyAyLjA4OWguMDQ3eiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggZD0iTTc5NS43MDIgNjIuMTk5Yy0xLjc3LjUyNS0zLjQyIDEuMzktNC44NTcgMi41NDdhMTAuOTcgMTAuOTcgMCAwIDAtMy4wMTQgMy45OSAxMy4xODQgMTMuMTg0IDAgMCAwLTEuMDM4IDUuMzIgMTEuODA1IDExLjgwNSAwIDAgMCAxLjI3MSA1LjY0NiAxMS4zODUgMTEuMzg1IDAgMCAwIDMuMzggMy45MyAxNC41MyAxNC41MyAwIDAgMCA0LjkwMyAyLjI4OCAyMy41MjUgMjMuNTI1IDAgMCAwIDExLjgxIDAgMTQuMjg2IDE0LjI4NiAwIDAgMCA0Ljg3Ny0yLjI4OCAxMS4xNzcgMTEuMTc3IDAgMCAwIDMuMzI3LTMuOTIzIDEyLjQ4OCAxMi40ODggMCAwIDAgMS4yMjQtNS43NiAxMi4yNTUgMTIuMjU1IDAgMCAwLTEuMjUxLTUuNzEyIDExLjI5OSAxMS4yOTkgMCAwIDAtMy4zMjctMy45MjMgMTQuNjQyIDE0LjY0MiAwIDAgMC00Ljg4My0yLjI4OCAyMi40MTUgMjIuNDE1IDAgMCAwLTUuODc1LS43NTIgMjIuMDYgMjIuMDYgMCAwIDAtNi41MjEuODkybC0uMDI2LjAzM3ptLTExLjc4NCAxOS41MjVhMTcuMjIxIDE3LjIyMSAwIDAgMS0xLjU3Ni03LjUxNSAxOC4yOTEgMTguMjkxIDAgMCAxIDEuNTUtNy43NCAxNS42NCAxNS42NCAwIDAgMSA0LjI3OC01LjU4NyAxOC40OTMgMTguNDkzIDAgMCAxIDYuMzQ3LTMuMzY1IDI3LjAxMyAyNy4wMTMgMCAwIDEgMTUuMzAzIDAgMTguODMxIDE4LjgzMSAwIDAgMSA2LjI5NSAzLjMyNSAxNS44MjQgMTUuODI0IDAgMCAxIDQuMzA0IDUuNTQ2IDE5LjMzNCAxOS4zMzQgMCAwIDEgMCAxNS4zMjkgMTUuODY0IDE1Ljg2NCAwIDAgMS00LjMwNCA1LjU0IDE4LjQyIDE4LjQyIDAgMCAxLTYuMjk1IDMuMzI1IDI2LjExMSAyNi4xMTEgMCAwIDEtNy42MDUgMS4wOSAyNS43OSAyNS43OSAwIDAgMS03LjY3OC0xLjExNyAxOC43NzMgMTguNzczIDAgMCAxLTYuMzItMy4zMjUgMTYuMDY2IDE2LjA2NiAwIDAgMS00LjMwNS01LjQ4NmwuMDA2LS4wMnptMzYuOTAxIDM0LjEwOC0uMDc0LS4yMTNhMTQuNjM1IDE0LjYzNSAwIDAgMC0yLjkyLTQuNzY4IDE0Ljg5IDE0Ljg5IDAgMCAwLTQuMjY1LTMuMTcyIDIzLjgwOSAyMy44MDkgMCAwIDAtNS4wODQtMS44MDJsLS44MzEtLjE4Ni4wNzMgNS4zMi41MTkuMTJjMS4zMzUuMzAyIDIuNjI0Ljc4IDMuODMyIDEuNDIzYTExLjgzOCAxMS44MzggMCAwIDEgMi45ODEgMi4yODcgOS45NTcgOS45NTcgMCAwIDEgMS45NDkgMy4xMTljLjM3OSAxLjEzNC41NjggMi4zMjMuNTU5IDMuNTE4YTExLjU3NiAxMS41NzYgMCAwIDEtMS4zMyA1LjgxMiAxMC40MSAxMC40MSAwIDAgMS0zLjQ1MyAzLjY3MSAxNS4yOTkgMTUuMjk5IDAgMCAxLTQuOTU3IDEuOTk1Yy0zLjg1Mi44MzMtNy44NC43OTktMTEuNjc3LS4wOTlhMTQuNzkxIDE0Ljc5MSAwIDAgMS00Ljg1MS0yLjE1NSAxMC41OTQgMTAuNTk0IDAgMCAxLTMuMzI2LTMuNjQ0IDEwLjgxNCAxMC44MTQgMCAwIDEtMS4yMTEtNS4yNzQgMTUuODY4IDE1Ljg2OCAwIDAgMSAuNDUyLTMuOTQzIDkuNTQ1IDkuNTQ1IDAgMCAxIDEuMjMxLTIuNjYxYzEuMjExLTEuNzc1IDMuMzI3LTMuMDA1IDYuMjA4LTMuNjc3bC41MzktLjExM3YtLjM5MmguMDY2di00LjgxNWwtLjc3MS4xMmExNS40MjYgMTUuNDI2IDAgMCAwLTUuMTUgMS43MDIgMTIuNDA3IDEyLjQwNyAwIDAgMC0zLjc3OSAzLjE2NSAxMi44NDggMTIuODQ4IDAgMCAwLTEuOTIzIDMuMzcyYy0uMjE3LjQ5LS40MDYuOTkyLS41NjYgMS41MDNhMTguNDgzIDE4LjQ4MyAwIDAgMC0uNzU4IDUuMzggMjEuNTc4IDIxLjU3OCAwIDAgMCAxLjA3MSA2LjkzNiAxNC4xMTYgMTQuMTE2IDAgMCAwIDMuNTA2IDUuNjEzIDE2LjQ5OCAxNi40OTggMCAwIDAgNi4xODEgMy43MjQgMjcuNTU5IDI3LjU1OSAwIDAgMCA5LjA3NiAxLjMzYzIuNTMuMDEyIDUuMDUzLS4yODUgNy41MTEtLjg4NWExOC4yMzcgMTguMjM3IDAgMCAwIDYuMzM1LTIuODU5IDE0LjQ5MyAxNC40OTMgMCAwIDAgNC4zNzEtNS4xMTQgMTYuMTQ5IDE2LjE0OSAwIDAgMCAxLjYxNy03LjQ4MSAxOC40NzMgMTguNDczIDAgMCAwLTEuMDg1LTYuNTkxIDIuNjczIDIuNjczIDAgMCAwLS4xMDYtLjIzOWwuMDQtLjAyN3ptLTM3LjMzMy03NS4wMjdoMzcuMzc5di0uMzMyaC4xOHYtNC43ODhoLTI4LjQ4NGwyOC4zMDQtMTAuNDQxdi0uNDE5bC4xOC0uMDY2di00LjE3bC0yNy44NTItMTAuMjQxaDI3LjY3MnYtLjY2NWguMThWNC44OTVINzgzLjN2Ni4zNTdsLjE4Ni4wNnYuNTU5TDgxMy41IDIyLjgzbC0zMC4yIDExLjIyNXY2LjM5MWguMTg2VjQwLjgwNXptLTU1LjQzNy00LjgyOGMwLTcuMjI4IDAtMTMuNDg2IDYuODQ3LTEzLjQ4NiA2Ljg0NiAwIDYuODM5IDcuOTggNi44MzkgMTMuODc5IDAgMi45MzIuOTg1IDMuOTEgMy45MTMgMy45MWgxNS40NTZjMi45MzQgMCAzLjkxMi0xLjk1NSAzLjkxMi00Ljg4MSAwLTIxLjExNC0xMC4xNjctMzUuMTkzLTMxLjA5OC0zNS4xOTMtMTkuNTU1IDAtMjkuMzM2IDEzLjA5NC0yOS4zMzYgMzAuNjkgMCAxNS40NDIgMS45NTcgMjIuNjc4IDIwLjczMyA0NC43NjMgMTAuMzY2IDEyLjEyMyAxNi4yMzQgMjAuMTM2IDE2LjIzNCAyNy41NjUgMCA3LjIyOCAwIDEzLjQ3OS02Ljg0NiAxMy40NzktNi44NDcgMC02Ljg0LTcuOTgtNi44NC0xMy44NzggMC0yLjkzMy0uOTg1LTMuOTEtMy45MTItMy45MWgtMTUuNDYzYy0yLjkzNCAwLTMuOTEyIDEuOTU0LTMuOTEyIDQuODg3IDAgMjEuMTIxIDEwLjE2NiAzNS4xOTMgMzEuMDk4IDM1LjE5MyAxOS41NTUgMCAyOS4zMzUtMTMuMDk0IDI5LjMzNS0zMC42OTcgMC0xNS40MzUtMS43NTYtMjIuNjc3LTIwLjUzMi00NC43NjMtMTAuMzczLTEyLjExNi0xNi40MzQtMjAuMTMtMTYuNDM0LTI3LjU1OGguMDA2em0tNzguNDExIDEwMi4wNGg0Mi4yMTZjMi45MzUgMCAzLjkxMy0uOTc3IDMuOTEzLTMuOTF2LTE0LjQ3MWMwLTIuOTMzLS45NzgtMy45MDQtMy45MTMtMy45MDRoLTE4Ljc3NmMtMy45MTIgMC0zLjkxMiAwLTMuOTEyLTMuOTFWODAuOTM5YzAtMy45MSAwLTMuOTEgMy45MTItMy45MWgxOC43NzZjMi45MzUgMCAzLjkxMy0uOTc4IDMuOTEzLTMuOTFWNTguNjQ3YzAtMi45MjYtLjk3OC0zLjkwNC0zLjkxMy0zLjkwNGgtMTguNzc2Yy0zLjkxMiAwLTMuOTEyIDAtMy45MTItMy45MVYyNy4zNzJjMC0zLjkwNCAwLTMuOTA0IDMuOTEyLTMuOTA0aDE4Ljc3NmMyLjkzNSAwIDMuOTEzLS45NzcgMy45MTMtMy45MVY1LjA5NGMwLTIuOTMzLS45NzgtMy45MS0zLjkxMy0zLjkxaC00Mi4yMzZjLTIuOTQxIDAtMy45MTIuOTc3LTMuOTEyIDMuOTF2MTI5LjAxM2MwIDMuOTEgMS45NTYgMy45MSAzLjkxMiAzLjkxaC4wMnpNNjEwLjUyMiA1LjA5NHY5NS41ODljMCA5Ljc2OSAwIDE2LjAyLTYuODQ2IDE2LjAycy02Ljg0Ni02LjI1MS02Ljg0Ni0xNi4wMlY1LjA5NGMwLTIuOTMzLS45NzktMy45MS0zLjkxMy0zLjkxaC0xNS42NDJjLTIuOTM0IDAtMy45MTIuOTc3LTMuOTEyIDMuOTF2OTQuNzk4YzAgMjkuNTIgMTAuNzU4IDM5LjEwMyAzMC4zMTMgMzkuMTAzczMwLjI5My05Ljc4MyAzMC4yOTMtMzkuMTAzVjUuMDk0YzAtMi45MzMtLjk3MS0zLjkxLTMuOTEyLTMuOTFoLTE1LjYzNmMtMi45MzQgMC0zLjkxMi45NzctMy45MTIgMy45MWguMDEzem0tODcuMjI3IDEzMi45MjNoNDEuMjUyYzIuOTM0IDAgMy45MTktLjk3NyAzLjkxOS0zLjkxdi0xNC40NzFjMC0yLjkzMy0uOTg1LTMuOTA0LTMuOTE5LTMuOTA0aC0xNy41ODVjLTQuMTA1IDAtNC4xMDUgMC00LjEwNS00LjEwM1Y1LjA5NGMwLTIuOTMzLS45NzItMy45MS0zLjkxOS0zLjkxaC0xNS42NDNjLTIuOTM0IDAtMy45MDUuOTc3LTMuOTA1IDMuOTF2MTI5LjAxM2MwIDIuOTMzLjk3MSAzLjkxIDMuOTA1IDMuOTF6TTQ3MC41IDM4LjMyNWMwLTkuNzcgMC0xNi4wMzQgNi44NDctMTYuMDM0IDYuODQ2IDAgNi44NDYgNi4yNjUgNi44NDYgMTYuMDM0djUuODU5YzAgMi45MzkuOTcxIDMuOTEgMy45MTIgMy45MWgxNS42MzZjMi45NDEgMCAzLjkxMi0uOTcxIDMuOTEyLTMuOTF2LTUuMDg4QzUwNy42NTMgOS43NyA0OTYuOTAxIDAgNDc3LjM0NyAwYy0xOS41NTUgMC0zMC4zNCA5LjU4My0zMC4zNCAzOS4wOTZWOTkuODhjMCAyOS41MiAxMC43NTggMzkuMTAyIDMwLjMyIDM5LjEwMiAxOS41NjEgMCAzMC4zMDYtOS43ODIgMzAuMzA2LTM5LjEwMnYtNC44ODJjMC0yLjkzMi0uOTcxLTMuOTEtMy45MTItMy45MWgtMTUuNjM2Yy0yLjk0MSAwLTMuOTEyLjk3OC0zLjkxMiAzLjkxdjUuNjczYzAgOS43NjkgMCAxNi4wMi02Ljg0NiAxNi4wMi02Ljg0NyAwLTYuODQ3LTYuMjUxLTYuODQ3LTE2LjAyVjM4LjMyNWguMDJ6TTM5OC4xNDQgMjYuNGMwLTMuOTEgMC0zLjkxIDMuOTEyLTMuOTEgOS43NzQgMCA5Ljc3NCA5Ljk3NSA5Ljc3NCAxOS45NXY4Ljc5MmMwIDkuOTc1IDAgMTkuOTUtOS43NzQgMTkuOTUtMy45MTIgMC0zLjkxMiAwLTMuOTEyLTMuNTE4VjI2LjQwMXptMzcuMTUzIDI3LjE3M3YtMTMuM2MwLTI5LjMyOC0xMy42ODctMzkuMDk3LTMzLjI2OC0zOS4wOTdoLTIzLjQ0N2MtMi45MzQgMC0zLjkxMi45NzgtMy45MTIgMy45MVYxMzQuMWMwIDIuOTMzLjc4NSAzLjkxIDMuOTEyIDMuOTFoMTUuNjQ5YzIuNzM1IDAgMy45MTMtLjk3NyAzLjkxMy0zLjkxVjk2LjM4YzAtMy45MSAwLTMuOTEgMy45MTItMy45MSAxOS41NTQgMCAzMy4yNjctOS43NzUgMzMuMjY3LTM4Ljg5NmgtLjAyNnptLTk1LjgxLTE0Ljg1N3Y2MS45NjZjMCA5Ljc2OSAwIDE2LjAyLTYuODQ3IDE2LjAyLTYuODQ2IDAtNi44NC02LjI1MS02Ljg0LTE2LjAyVjM4LjcxN2MwLTkuOTc1IDAtMTYuMjI2IDYuODQtMTYuMjI2czYuODQ3IDYuMjU4IDYuODQ3IDE2LjIyNnptMjMuNDY2IDYxLjE4MVYzOS4zMDNjMC0yOS4zMjctMTAuNzUyLTM5LjA5Ni0zMC4zMTMtMzkuMDk2cy0zMC4zMTMgOS41NzYtMzAuMzEzIDM5LjA5NnY2MC41OWMwIDI5LjUyIDEwLjc1OSAzOS4xMDMgMzAuMzEzIDM5LjEwMyAxOS41NTUgMCAzMC4zMTMtOS43ODMgMzAuMzEzLTM5LjEwM3YuMDA3em0tOTEuOTMxIDM4LjExOWgxNS42MzZjMS45NTYgMCAzLjkxMiAwIDMuOTEyLTMuOTFWNS4wOTRjMC0yLjkzMy0uOTc4LTMuOTEtMy45MTItMy45MWgtMTUuNjM2Yy0yLjkyNyAwLTMuOTA1Ljk3Ny0zLjkwNSAzLjkxdjQ1Ljc0YzAgMy45MSAwIDMuOTEtMy45MTIgMy45MWgtNS44NjJjLTMuOTEyIDAtMy45MTIgMC0zLjkxMi0zLjkxVjUuMDk0YzAtMi45MzMtLjk3OC0zLjkxLTMuOTEzLTMuOTFoLTE1LjY1NWMtMi45MjggMC0zLjkxMi45NzctMy45MTIgMy45MXYxMjkuMDEzYzAgMy45MSAxLjk5NiAzLjkxIDMuOTEyIDMuOTFoMTUuNjU1YzEuOTU3IDAgMy45MTMgMCAzLjkxMy0zLjkxVjgwLjkwNmMwLTMuOTEgMC0zLjkxIDMuOTEyLTMuOTFoNS44NjJjMy45MTIgMCAzLjkxMiAwIDMuOTEyIDMuOTF2NTMuMjAxYzAgMy45MSAxLjk1NiAzLjkxIDMuOTA1IDMuOTF6bS04Ni44MjctMTAyLjA0YzAtNy4yMjggMC0xMy40ODYgNi44NTMtMTMuNDg2czYuODQ2IDcuOTggNi44NDYgMTMuODc5YzAgMi45MzIuOTcyIDMuOTEgMy45MDYgMy45MWgxNS40NDljMi45MzQgMCAzLjkwNi0xLjk1NSAzLjkwNi00Ljg4MSAwLTIxLjExNC0xMC4xNi0zNS4xOTMtMzEuMDg1LTM1LjE5My0xOS41NjggMC0yOS4zNDIgMTMuMDk0LTI5LjM0MiAzMC42OSAwIDE1LjQ0MiAxLjk2MyAyMi42NzggMjAuNzM5IDQ0Ljc2MyAxMC4zNTkgMTIuMTIzIDE2LjIyOCAyMC4xMzYgMTYuMjI4IDI3LjU2NSAwIDcuMjI4IDAgMTMuNDc5LTYuODQ3IDEzLjQ3OS02Ljg0NiAwLTYuODQ2LTcuOTgtNi44NDYtMTMuODc4IDAtMi45MzMtLjk3OC0zLjkxLTMuOTA2LTMuOTFIMTY0LjY0Yy0yLjkzNCAwLTMuOTEyIDEuOTU0LTMuOTEyIDQuODg3IDAgMjEuMTIxIDEwLjE2NiAzNS4xOTMgMzEuMDk4IDM1LjE5MyAxOS41NTUgMCAyOS4zMjktMTMuMDk0IDI5LjMyOS0zMC42OTcgMC0xNS40MzUtMS43NTctMjIuNjc3LTIwLjUzMy00NC43NjMtMTAuMzU5LTEyLjExNi0xNi40MjctMjAuMTMtMTYuNDI3LTI3LjU1OHptNTgzLjI0MyA5NS45NTVoNy4wNjZ2Ny4wNjNoLTcuMDY2di03LjA2M3oiIGZpbGw9IiMxRDFEMUIiLz4KPC9zdmc+Cg=="
//               alt="ShopClues"
//             />
//           </div>
//           <div className="flex items-center border rounded-lg overflow-hidden text-gray-700 bg-[#e9f6f7] w-[1040px] h-[40px]">
//             <button className="pl-2 text-gray-700 bg-[#e9f6f7]">
//               <IoSearchOutline />
//             </button>
//             <input
//               type="text"
//               className="px-4 py-2 w-full text-gray-700 bg-[#e9f6f7] focus:outline-none"
//               placeholder="What is on your mind today?"
//             />
//             <button className="px-4 py-2 bg-[#ff8750] text-white">
//               Search
//             </button>
//           </div>
//           <div className="flex gap-4 items-center pr-16">
//             <div>
//               <div className="text-[12px] text-[#212121]">Share</div>
//               <div className="flex text-[11px] text-[#21A3B5] cursor-pointer hover:underline">
//                 Location{" "}
//                 <span className="text-[15px] cursor-default">
//                   <SlLocationPin />
//                 </span>
//               </div>
//             </div>
//             <div>
//               <IoMdNotificationsOutline className="text-[24px] text-[#21A3B5] cursor-pointer" />
//             </div>
//             <div>
//               <IoIosHeartEmpty className="text-[24px] text-[#21A3B5] cursor-pointer" />
//             </div>
//             <div>
//               <IoCartOutline className="text-[24px] text-[#21A3B5] cursor-pointer" />
//             </div>
//             <div className="relative">
              // {user ? (
              //   <div
              //     className="text-[#212121] text-[16px] cursor-pointer hover:underline"
              //     onClick={handleLogout}
              //     onMouseEnter={handleMouseEnter}
              //   >
              //     Log Out
              //   </div>
              // ) : (
              //   <div
              //     className="text-[#212121] text-[16px] cursor-pointer hover:underline"
              //     onMouseEnter={handleMouseEnter}
              //     onClick={() => setShowModal(true)}
              //   >
              //     Sign In
              //   </div>
              // )}
//               {showComponent && !user && (
//                 <div className="absolute right-0">
//                   <Signindropdown
//                     handleMouseLeave={handleMouseLeave}
//                     setShowModal={setShowModal}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
//     </>
//   );
// };

// export default Navbar;



















