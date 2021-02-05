const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Stratocaster",
      lessons: [
        { id: 1, title: "Fender", img: "http://d26lpennugtm8s.cloudfront.net/stores/001/073/277/products/guitarra_fender_014_4553_player_stratocaster_plus_top_pf_552_tobacco_burst_1-min1-44f136456f5b45ce9715942279797880-640-0.png" },
        { id: 2, title: "Suhr", img: "https://sc1.musik-produktiv.com/pic-010100686xl/suhr-classic-antique-sss-mn-blk.jpg" },
      ],
      
    },
    {
      id: 2,
      title: "Telecaster",
      lessons: [
        { id: 3, title: "Tagima", img: "https://cdn1.appsisecommerce.com.br/clientes/cliente9492/produtos/30112/P1506376667.jpg" },
        { id: 4, title: "Squier", img: "https://a-static.mlcdn.com.br/618x463/guitarra-fender-squier-030-1260-vintage-modified-telecaster/cheirodemusica1/5777376708/339111138bfb0318d94eb2fedcfbe2b1.jpg" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      // um novo state é criado e retornado
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
