class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
  }
  edit = () => {
    this.setState({edit: true});
  }
  remove = () => {
    this.props.deleteBlock(this.props.index);
  }
  save = () => {
    var value = this.refs.newTxt.value;
    this.props.update(value, this.props.index);
    this.setState({edit: false});
  }
  rendNorm = () => {
    return (
      <div className="box">
        <div className="text">{this.props.children}</div>
        <button onClick={this.edit} className="btn light">Редактировать</button>
        <button onClick={this.remove} className="btn red">Удалить</button>
      </div>
    );
  }
  rendEdit = () => {
    return (
      <div className="box">
        <textarea className="edition" ref="newTxt" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn success">Сохранить</button>
      </div>
    );
  }
  render() {
    if (this.state.edit) {
    return this.rendEdit();
  } else {
    return this.rendNorm();
  }
}
}
class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'Попасть на стажировку ◉◡◉',
        'Сдать сессию',
        'Покушать',
        'Пойти спать'
      ],
    }
  }
  add = () => {
    var text = this.refs.addTxt.value;
    var arr = this.state.tasks;
    arr.unshift(text);
    this.refs.addTxt.value='';
    this.setState ({tasks: arr});
  };﻿
  deleteBlock = (i) => {
    var arr = this.state.tasks;
    arr.splice(i, 1);
    this.setState({tasks: arr});
  }
  updateText = (text, i) => {
    var arr = this.state.tasks;
    arr[i] = text;
    this.setState({tasks: arr});
  }
  eachTask = (item, i) => {
    return (
      <Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
      {item}
      </Task>
    );
  }
  render() {
    return (
      <div className = "field">
      <textarea ref="addTxt" placeholder="Введите задание:"></textarea>
      <div className="newbutton"><button onClick={this.add} className="btn new">Новое задание</button></div>
        {this.state.tasks.map (this.eachTask)}
      </div>
    );
  }
}
const place = document.getElementById('example');
ReactDOM.render (
<div>
  <Field />
</div>,
 place
 );


var accountArray = [];
var passwordArray = [];
var repPasswordArray = [];
function isEmpty(str) {
  if (str.trim() == '')
    return true;

  return false;
}

 document.getElementById("clearButton1").onclick = function(e){
   if (isEmpty(document.getElementById("emailInput").value)) {
     alert(`Ошибка!
Недопустимое имя аккаунта!`);
} else if (isEmpty(document.getElementById("passwordInput").value)) {
    alert(`Ошибка!
Недопустимый пароль`)
}
     else if (document.getElementById("passwordInput").value != document.getElementById("rep-passwordInput").value) {
      alert(`Ошибка!
Пароли не совпадают!`);
  } else {
     alert("Регистрация прошла успешно");
     accountArray.push(document.getElementById("emailInput").value);
     passwordArray.push(document.getElementById("passwordInput").value);
     repPasswordArray.push(document.getElementById("rep-passwordInput").value);
   }
   document.getElementById("emailInput").value = "";
   document.getElementById("passwordInput").value = "";
   document.getElementById("rep-passwordInput").value = "";
 }



 document.getElementById("clearButton2").onclick = function(e){
   var index = -1;
   for (var i = 0; i < accountArray.length; i++) {
     if (accountArray[i] === document.getElementById("emailCheck").value) {
      index = i;
      break;
     }
  }
   if (index == -1) {
     alert(`Данного аккаунта не существует!`);
   } else if (document.getElementById("passwordCheck").value != passwordArray[index]) {
     alert(`Пароль введён неверно!!`);
   }
    else {
     alert(`Всё работает ^_^`);
   }
   document.getElementById("emailCheck").value = "";
   document.getElementById("passwordCheck").value = "";
 }
