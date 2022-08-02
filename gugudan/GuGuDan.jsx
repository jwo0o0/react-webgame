const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => { //state가 바뀔 때마다 함수 자체가 다시 실행됨, class로 구현하면 render 함수만 다시 실행
    const [first, setFirst] = React.useState(2);
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답: ' + value);
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('꽝');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onInput = (e) => {
        setFirst(e.target.value);
        setSecond(Math.ceil(Math.random() * 9));
    }

    return (
        <>
            <div className="title">GuGuDan</div>
            <div className="select-wrapper">
                <p>단을 선택하세요 </p>
                <select className="dan" onInput={onInput}>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </select>
            </div>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = GuGuDan;