
import axiosClient from "./axiosClient";

const movieApi = {
    getMovieList : () =>{
        const path = `/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`;
        return axiosClient.get(path)
    }
}

export default movieApi