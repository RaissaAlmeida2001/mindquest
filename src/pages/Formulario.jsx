import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LogoBrancoReduzido.png";


const questions = [
  {
    id: "movies",
    category: "Filmes",
    question: "Qual tipo de filme você mais gosta?",
    options: [
      "Ação",
      "Comédia",
      "Terror",
      "Romance",
      "Ficção Científica",
      "Drama",
      "Fantasia",
      "Documentário"
    ]
  },

  {
    id: "series",
    category: "Séries",
    question: "Qual gênero de série combina mais com você?",
    options: [
      "Suspense",
      "Crime",
      "Comédia",
      "Drama",
      "Fantasia",
      "Anime",
      "Reality Show"
    ]
  },

  {
    id: "music",
    category: "Música",
    question: "Que tipo de música você mais gosta?",
    options: [
      "Pop",
      "Rock",
      "Rap",
      "Eletrônica",
      "MPB",
      "Sertanejo",
      "Jazz",
      "Clássica"
    ]
  },

  {
    id: "relax",
    category: "Relaxamento",
    question: "Quando você quer relaxar, prefere:",
    options: [
      "Assistir filmes ou séries",
      "Ouvir música",
      "Jogar",
      "Ler",
      "Fazer exercícios",
      "Descansar"
    ]
  },

  {
    id: "environment",
    category: "Ambiente",
    question: "Qual ambiente combina mais com você?",
    options: [
      "Lugar tranquilo",
      "Natureza",
      "Cidade movimentada",
      "Minha casa",
      "Eventos sociais"
    ]
  },

  {
    id: "hobbies",
    category: "Hobbies",
    question: "Como você costuma passar seu tempo livre?",
    options: [
      "Filmes e séries",
      "Jogos",
      "Esportes",
      "Tecnologia",
      "Música",
      "Aprender coisas novas"
    ]
  },

  {
    id: "activities",
    category: "Atividades",
    question: "Que tipo de atividade melhora seu humor?",
    options: [
      "Escutar música",
      "Caminhar",
      "Assistir algo",
      "Conversar",
      "Criar algo",
      "Relaxar"
    ]
  },

  {
    id: "social",
    category: "Social",
    question: "Você prefere experiências:",
    options: [
      "Sozinho",
      "Com amigos",
      "Com família",
      "Com alguém especial"
    ]
  },

  {
    id: "personality",
    category: "Personalidade",
    question: "Como você se define?",
    options: [
      "Criativo",
      "Aventureiro",
      "Calmo",
      "Curioso",
      "Competitivo",
      "Extrovertido"
    ]
  },

  {
    id: "recommendation",
    category: "Preferências",
    question: "O que você gostaria que o MindQuest recomendasse?",
    options: [
      "Filmes",
      "Séries",
      "Músicas",
      "Atividades",
      "Desafios"
    ]
  }
];



export default function ProfileQuestionnaire() {


  const navigate = useNavigate();


  const [currentQuestion, setCurrentQuestion] = useState(0);


  const [answers, setAnswers] = useState({});



  const current = questions[currentQuestion];



  const progress =
    ((currentQuestion + 1) / questions.length) * 100;





  function selectOption(option) {


    setAnswers({

      ...answers,

      [current.id]: option

    });


  }





  function nextQuestion() {


    if(currentQuestion < questions.length - 1){


      setCurrentQuestion(
        currentQuestion + 1
      );


    } else {


      saveProfile();


    }


  }





  function previousQuestion(){


    if(currentQuestion > 0){


      setCurrentQuestion(
        currentQuestion - 1
      );


    }


  }





  function saveProfile(){


    const profile = {


      userId:"USER_ID",


      createdAt:
        new Date().toISOString(),


      preferences: answers


    };



    console.log(
      "Perfil salvo:",
      profile
    );



    /*
    
    Aqui entra Firebase/API futuramente:

    await addDoc(
      collection(db,"profiles"),
      profile
    )

    */



    navigate("/menu");


  }





  return (

    <div className="container">


      <div className="card">


        <div className="text-center">


          <img

            src={logo}

            alt="MindQuest"

            className="
              w-32
              h-auto
              mx-auto
              mb-4
              object-contain
            "

          />



          <h1 className="title">

            Conheça seu MindQuest

          </h1>



          <p className="subtitle">

            Responda algumas perguntas para personalizarmos sua experiência

          </p>


        </div>





        <div className="mb-6">


          <div className="
            flex
            justify-between
            text-sm
            mb-2
          ">


            <span>

              Pergunta {currentQuestion + 1} de {questions.length}

            </span>



            <span>

              {Math.round(progress)}%

            </span>


          </div>




          <div className="
            w-full
            h-3
            bg-[#F5DACA]
            rounded-full
            overflow-hidden
          ">



            <motion.div


              animate={{
                width:`${progress}%`
              }}


              transition={{
                duration:0.4
              }}


              className="
                h-full
                bg-[#FF9B7D]
                rounded-full
              "


            />


          </div>


        </div>







        <motion.div

          key={current.id}

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

        >



          <p className="
            text-[#FF9B7D]
            font-semibold
          ">

            {current.category}

          </p>




          <h2 className="
            title
            text-left
            mt-3
          ">

            {current.question}

          </h2>





          <div className="space-y-3 mt-6">


            {
              current.options.map(option => (


                <button


                  key={option}


                  onClick={() =>
                    selectOption(option)
                  }



                  className={`
                    w-full
                    p-4
                    rounded-xl
                    border
                    text-left
                    transition

                    ${
                      answers[current.id] === option

                      ?

                      `
                      bg-[#FF9B7D]
                      text-white
                      border-[#FF9B7D]
                      `

                      :

                      `
                      border-[#ECC3A9]
                      hover:bg-[#F5DACA]
                      `
                    }

                  `}


                >

                  {option}


                </button>


              ))
            }


          </div>


        </motion.div>






        <div className="
          flex
          gap-3
          mt-8
        ">



          <button

            onClick={previousQuestion}

            disabled={
              currentQuestion === 0
            }


            className="
              button-secondary
              disabled:opacity-40
            "

          >

            Voltar

          </button>






          <button


            onClick={nextQuestion}


            disabled={
              !answers[current.id]
            }


            className="
              button-primary
              disabled:opacity-40
            "


          >


            {
              currentQuestion === questions.length - 1

              ?

              "Finalizar"

              :

              "Próximo"
            }


          </button>



        </div>


      </div>


    </div>

  );


}