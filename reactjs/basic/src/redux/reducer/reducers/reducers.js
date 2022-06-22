const stateGame = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./bauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./bauCua/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./bauCua/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./bauCua/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./bauCua/nai.png", diemCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
  ],
};
const BauCuaTomCaReducer = (state = stateGame, action) => {
  switch (action.type) {
    case "PLAY_GAME":
      break;
    case "DAT_CUOC":
      break;

    default:
      return { ...state };
  }
};
export default BauCuaTomCaReducer;
