import React, { Component } from "react";
import classes from "./Home.module.scss";
import Content from "../../Components/Content/Content";
import BookingDate from "../../Components/BookingDate/BookingDate";

class Home extends Component {
  render() {
    const photographers = [
      {
        id: "1",
        name: "Phạm Thanh sơn",
        image:
          "https://photobooking.vn/timthumb.php?src=http://photobooking.vn/attachment/images/user/43899c2eea0862d8cc37558ec476fbaf.jpg&zc=1&w=300",
        rate: -1,
        address: "Hoàng Mai - Hà nội",
        description: "",
        priceObject: [
          {
            people: 1,
            price: 840000
          },
          {
            people: 2,
            price: 1080000
          },
          {
            people: 3,
            price: 1320000
          },
          {
            people: 4,
            price: 1560000
          }
        ],
        gallery: [
          "https://photobooking.vn/attachment/images/products/1537687801400_a.jpg",
          "https://photobooking.vn/attachment/images/products/1537687801401_b.jpg",
          "https://photobooking.vn/attachment/images/products/1537687802071_c.jpg",
          "https://photobooking.vn/attachment/images/products/1537687802136_e.jpg",
          "https://photobooking.vn/attachment/images/products/1537687802145_f.jpg",
          "https://photobooking.vn/attachment/images/products/1537687803501_g.jpg",
          "https://photobooking.vn/attachment/images/products/1537687803501_h.jpg",
          "https://photobooking.vn/attachment/images/products/1537687803570_i.jpg",
        ]
      },
      {
        id: "2",
        name: "Nguyễn Hoàng Hiệp",
        image:
          "https://photobooking.vn/timthumb.php?src=https://photobooking.vn/attachment/images/user/7925a0b8a2a3b1190d2692a35c10c7c0.jpg&zc=1&w=300",
        rate: 2,
        address: "28 Tây Tựu- Bắc Từ Liêm- HN",
        description: "",
        priceObject: [
          {
            people: 1,
            price: 600000
          },
          {
            people: 2,
            price: 840000
          },
          {
            people: 3,
            price: 960000
          },
          {
            people: 4,
            price: 1080000
          }
        ],
        gallery: [
          "https://photobooking.vn/attachment/images/products/1537806538438_1.jpg",
          "https://photobooking.vn/attachment/images/products/1537806484611_2.jpg",
          "https://photobooking.vn/attachment/images/products/1537806485863_3.jpg",
          "https://photobooking.vn/attachment/images/products/1537806485866_4.jpg",
          "https://photobooking.vn/attachment/images/products/1537806485929_5.jpg",
          "https://photobooking.vn/attachment/images/products/1537806485960_6.jpg"
        ]
      },
      {
        id: "3",
        name: "Doãn Hoàng Hiếu",
        image:
          "https://photobooking.vn/timthumb.php?src=https://photobooking.vn/attachment/images/user/454ebd8286c7d698c8c8d86c926061d3.jpg&zc=1&w=300",
        rate: -1,
        address: "Hà nội",
        description: "",
        priceObject: [
          {
            people: 1,
            price: 960000
          },
          {
            people: 2,
            price: 1280000
          },
          {
            people: 3,
            price: 1440000
          },
          {
            people: 4,
            price: 1680000
          }
        ],
        gallery: [
          "https://photobooking.vn/attachment/images/products/1538042526485_22496415_1269754436504036_2258062284261812853_o.jpg",
          "https://photobooking.vn/attachment/images/products/1538042526486_23559368_1287626914716788_8500161065070444358_n.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527153_23593470_1290705911075555_3646579903785119798_o.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527397_26236711438_5a94369f56_k.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527470_26236712978_b4ff5d1161_k.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527593_37933598756_7c17375cc6_k.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527993_38408576426_e6e410c1ac_k.jpg",
          "https://photobooking.vn/attachment/images/products/1538042527995_39211708675_8d057ea788_k.jpg",
          "https://photobooking.vn/attachment/images/products/1538042528186_40644353314_1676c44871_k.jpg"
        ]
      },
      {
        id: "4",
        name: "Dư Thịnh",
        image:
          "https://photobooking.vn/timthumb.php?src=https://photobooking.vn/attachment/images/user/4f9dc152810cfc345e84259114f5f1ef.jpg&zc=1&w=300",
        rate: -1,
        address: "10 Trường Chinh, Đống Đa, Hà Nội",
        description: "",
        priceObject: [
          {
            people: 1,
            price: 840000
          },
          {
            people: 2,
            price: 1200000
          },
          {
            people: 3,
            price: 1440000
          },
          {
            people: 4,
            price: 1800000
          }
        ],
        gallery: [
          "https://photobooking.vn/attachment/images/products/1538560716292_42968237_2189578801364092_8411741879267229696_o_2189578794697426.jpg",
          "https://photobooking.vn/attachment/images/products/1538560752433_42972648_2189579268030712_5779062050785329152_o_2189579261364046.jpg",
          "https://photobooking.vn/attachment/images/products/1538560803451_43056086_2189578951364077_2743474527131402240_o_2189578948030744.jpg",
          "https://photobooking.vn/attachment/images/products/1538560833672_42971940_2189578678030771_6217717179668758528_o_2189578664697439.jpg",
          "https://photobooking.vn/attachment/images/products/1538560936975_42994660_2189579418030697_154891462884982784_o_2189579414697364.jpg",
          "https://photobooking.vn/attachment/images/products/1538560945566_43096693_2189578138030825_4166641490035998720_o_2189578134697492.jpg",
          "https://photobooking.vn/attachment/images/products/1538560956735_42958281_2189578844697421_6654102040379129856_o_2189578841364088.jpg",
        ]
      },
      {
        id: "5",
        name: "Duy Nguyễn",
        image:
          "https://photobooking.vn/timthumb.php?src=https://photobooking.vn/attachment/images/user/e669517e5ee31dbdea2fea9e042d5c2a.jpg&zc=1&w=300",
        rate: -1,
        address: "Hà nội",
        description: "",
        priceObject: [
          {
            people: 1,
            price: 720000
          },
          {
            people: 2,
            price: 1200000
          },
          {
            people: 3,
            price: 1440000
          },
          {
            people: 4,
            price: 1920000
          }
        ],
        gallery: [
          "https://photobooking.vn/attachment/images/products/1538547894032_1.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894032_2.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894640_3.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894642_4.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894716_5.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894719_6.jpg",
          "https://photobooking.vn/attachment/images/products/1538547894767_7.jpg",
          "https://photobooking.vn/attachment/images/products/1537687803570_i.jpg",
        ]
      },
      
    ];

    return (
      <div className={classes.Home}>
        <div className={classes.Image}>
          <img
            alt="background homepage"
            src="https://photobooking.vn/attachment/images/38797740_1218234041652752_3032706408052162560_o(2).jpg"
          />
          <h1>Chọn lịch chụp phù hợp với bạn</h1>
          <BookingDate></BookingDate>
          <div></div>
        </div>
        <Content photographers={photographers}></Content>
      </div>
    );
  }
}

export default Home;
