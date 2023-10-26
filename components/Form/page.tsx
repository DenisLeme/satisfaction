import React, { use, useState } from 'react';
import StarRatings from 'react-star-ratings';
import Checkbox from "../Checkbox/page";
import InputComponent from '../Input/page';
import { ChipVariants } from '../Chip/page';
import RadioButton from '../RadioButton/page';
import Dropdown from '../Dropdown/page';

// import { ChipVariants } from '../Chip/page';
// import Dropdown from '../Dropdown/page';


const SatisfacaoForm = () => {
  const [rating, setRating] = useState(0);

  const[radioValue , setRadioValue] = useState({
    radio1: false,
    radio2: false,
    radio3: false,
    radio4: false,
    radio5: false,
    radio6: false,
    radio7: false,
    radio8: false,
    radio9: false,
    radio10: false,
  })

  const [checkboxValue, setCheckboxValue] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false,
    checkbox19: false,
    checkbox20: false,
    checkbox21: false,
    checkbox22: false,
  });
  const handleCheckboxChange = (name: string, isChecked: boolean) => {
    setCheckboxValue({
      ...checkboxValue,
      [name]: isChecked,
    });
  };
  const handleRadioChange = (name: string, isChecked: boolean) => {
    setRadioValue({
      ...radioValue,
      [name]: isChecked,
    });
  };

  const handleRatingChange = (newRating: React.SetStateAction<number>) => {
    setRating(newRating);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(`Avaliação: ${rating}`);
  };

  return (
    <section className='w-full h-screen'>
      <div className="h-[250px] w-full flex items-center justify-center bg-slate-900">
        <div className='w-full flex self-center justify-center'>
          <div className='sm:max-w[80vw] md:max-w-[50vw] flex'>
            <h1 className="text-[40px] text-white my-4 font-semibold">Pesquisa de Satisfação</h1>
          </div>
        </div>
      </div>
      <div className='w-full flex self-center justify-center'>
        <div className='bg-white py-6 px-6 sm:max-w[80vw] md:max-w-[50vw] mt-[-96px] flex self-center rounded-[16px]'>
          <form>
            <div className='flex flex-col whitespace-nowrap  gap-y-4'>

              <div id="first-question">
                <h1 className="text-[24px] my-2">
                  Título da pergunta deve ficar aqui
                </h1>
                <p className="text-[14px] text-muted my-2">
                  Também é importante ter um espaço para o dono da loja colocar uma descrição
                  <br />da pergunta para ajudar o entendimento do usuário
                </p>
                <div className="my-2">
                  <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    starEmptyColor="lightgray"
                    starHoverColor="gold"
                    starDimension="60px"
                    starSpacing="6px"
                    changeRating={handleRatingChange}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>


              <div id="second-question">
                <h1 className="text-[24px] my-2">
                  Título da pergunta deve ficar aqui
                </h1>
                <p className="text-[14px] text-muted my-2">
                  Também é importante ter um espaço para o dono da loja colocar uma descrição
                  <br />da pergunta para ajudar o entendimento do usuário
                </p>
                <div className="flex gap-2 py-4 rounded-full justify-between">
                  <RadioButton
                    label="1"
                    name="1"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio1}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio1", isChecked)
                    } />
                  <RadioButton
                    label="2"
                    name="2"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio2}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio2", isChecked)
                    } />
                  <RadioButton
                    label="3"
                    name="3"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio3}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio3", isChecked)
                    } />
                  <RadioButton
                    label="4"
                    name="4"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio4}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio4", isChecked)
                    } />
                  <RadioButton
                    label="5"
                    name="5"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio5}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio5", isChecked)
                    } />
                  <RadioButton
                    label="6"
                    name="6"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio6}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio6", isChecked)
                    } />
                  <RadioButton
                    label="7"
                    name="7"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio7}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio7", isChecked)
                    } />
                  <RadioButton
                    label="8"
                    name="8"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio8}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio8", isChecked)
                    } />
                  <RadioButton
                    label="9"
                    name="9"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio9}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio9", isChecked)
                    } />
                  <RadioButton
                    label="10"
                    name="10"
                    isFlexRow={false}
                    isRounded={true}
                    isChecked={radioValue.radio10}
                    onChange={(isChecked: any) =>
                      handleRadioChange("radio10", isChecked)
                    } />
                </div>
                <div>
                  <p className="text-[14px] text-muted my-2">
                    Descreva o motivo da sua avaliação
                    <span className='text-gray-500'>&nbsp;(opcional)</span>
                  </p>
                  <InputComponent />
                </div>
                <div>
                  <Dropdown/>
                </div> 
                <div className='text-[14px] text-muted my-2 '>
                  <p>Pergunta de escolha única?</p>
                  <div className='flex gap-10 py-4 rounded-full justify-start'>
                    <Checkbox
                      label="Sim"
                      name="Sim"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox11}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox11", isChecked)
                      }
                    />
                    <Checkbox
                      label="Não"
                      name="Não"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox12}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox12", isChecked)
                      }
                    />
                  </div>
                </div>
                <div className='text-[14px] text-muted my-2'>
                  <p>Pergunta de multipla escolha?</p>
                  <div>
                    <br />
                    <ChipVariants />
                  </div>
                </div>
                <br />
                <div className='text-[14px] text-muted my-2  '>
                  <p>Pergunta de multipla escolha?</p>
                  <div className='flex flex-col gap-2 py-2 rounded-full items-start'>
                    <Checkbox
                      label="OPC1"
                      name="OPC1"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox13}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox13", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC2"
                      name="OPC2"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox14}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox14", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC3"
                      name="OPC3"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox15}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox15", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC4"
                      name="OPC4"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox16}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox16", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC5"
                      name="OPC5"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox17}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox17", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC6"
                      name="OPC6"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox18}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox18", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC7"
                      name="OPC7"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox19}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox19", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC8"
                      name="OPC8"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox20}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox20", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC9"
                      name="OPC9"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox21}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox21", isChecked)
                      }
                    />
                    <Checkbox
                      label="OPC10"
                      name="OPC10"
                      isFlexRow={false}
                      isRounded={true}
                      isChecked={checkboxValue.checkbox22}
                      onChange={(isChecked: any) =>
                        handleCheckboxChange("checkbox22", isChecked)
                      }
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-muted my-2">
                    Pergunta de texto?
                  </p>
                  <InputComponent />
                </div>
                <br />
                <div>
                  <p className='text-[14px] text-muted my-2'>Pergunta de texto?</p>
                  <InputComponent />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SatisfacaoForm;
