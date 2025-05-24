// Text Input Form
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";


function TextInputForm({ inputType, handelFormSubmit, handelTextInputChange, handelShowHideClick }) {

    return (
        <form onSubmit={handelFormSubmit}>
            <div> <TextInput
                type={inputType}
                label={"Enter Word or Phase"}
                placeholder={"Enter your Word or Phase here ..."}
                onChangeHandler={handelTextInputChange}

            /> </div>

            <div>
                <Button
                    styleType={"warning"}
                    text={inputType === 'password' ? "show" : "hide"}
                    onClickHandler={handelShowHideClick}
                />
            </div>

            <div>
                <Button
                    type={"submit"}
                    styleType={"primary"}
                    text={"Submit"}

                />
            </div>
        </form>
    )
}

export default TextInputForm;