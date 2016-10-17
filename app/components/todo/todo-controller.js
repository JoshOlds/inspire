(function(){

	var todoService = new TodoService();

	var todoList = todoService.getTodos();
	if(todoList.length > 0){
		updateTodos();
	}

	function updateTodos(){
		var todoListElem = $('#todo-list');
		var template = '';

		todoList.forEach(function(item, index){
			template +=`
			<li>${item} <i class="fa fa-trash todo-delete"aria-hidden="true" id="${index}"></i></li>
			`
		})
		todoListElem.html(template)
	}

	$('#todo-form').on('submit', function(e){
		e.preventDefault();
		todoList.push($('#todo-text').val())
		$('#todo-text').val('')
		todoService.saveTodos(todoList);
		updateTodos();
	})

	$('body').on('click','.todo-delete', function(){
		var index = this.id;
		todoList.splice(index, 1);
		todoService.saveTodos(todoList);
		updateTodos();
	})


	
	
	
}())
