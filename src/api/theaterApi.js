import axiosClient from "./axiosClient";

const theatersApi = {
    getTheaterInformation : () =>{
        const path = "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09"
        return axiosClient.get(path)
    }
}

export default theatersApi