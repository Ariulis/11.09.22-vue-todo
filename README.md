https://www.youtube.com/watch?v=Ez5_CITkg24

Задание:

Написать SPA на Vue.js 2, представляющий из себя прототип сайта для отслеживания дел.
Сайт должен состоять из 3-х страниц:
  - Страница постановки задачи
    - Текстовые поля с валидацией для вывода названия задачи, тегов (произвольно) и описания (до 2048 символов)
    - Поле типа datepicker для указания дедлайна задачи
    - Кнопка, сохраняющая задачу в браузере, чтобы она была доступна между сессиями
    - Созданная задача получает статус "в работе"
  - Страница вывода задач
    - Список задач с информацией о ней. Если описание не влазит - оно должно быть обрезано (без использования JS)
    - Фильтр по статусу задачи, а также по просроченным задачам
  - Страница вывода задачи
    - Полная информация о задаче
    - Изменение описания, времени дедлайна
    - Переход задачи в статус "завершена"

Выполенение:

- vue create .
- yarn add materialize-css@next vue-router@3 vuex@3
- views - ListTasks.vue, CreateTask.vue, UpdateTask.vue
- materialize - main.js, App.vue
- components/NavBar.vue -> App.vue

- views/CreateTask.vue:
  - form
  - submitHandler()
  - store/index.js:
    - actions -> createTask({commit}, task)
    - state -> tasks
    - mutations -> createTask(state, task)
    - getters -> tasks

- views/ListTasks.vue:
  - table
  - select -> filter
  - computed -> sortTasks()
  - button -> methods -> clearFilter()
  - methods -> deleteTask()
  - store -> actions -> deleteTask()
  - store -> mutations -> deleteTask()

- views/UpdateTask.vue:
  - form
  - getters -> taskById
  - methods -> updateTask()
  - store -> actions -> updateTask()
  - store -> mutations -> updateTask()
  - methods -> completeTask()
  - store -> actions -> completeTask()
  - store -> mutations -> completeTask()
  - buttons wrap in div v-if="task.status !== 'completed'"