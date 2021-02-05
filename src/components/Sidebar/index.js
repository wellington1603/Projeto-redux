import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from 'react-bootstrap/Button'
//  colocando nossas Actions dentro de um Objeto
import * as CourseActions from "../../store/actions/actions";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside >
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          
            {module.lessons.map((lesson) => (
               <div key={lesson.id}>
               
                {/* define uma licao e modulo como ativa.  */}
                <Button variant="primary" size="sm" onClick={() => toggleLesson(module, lesson)}>
                {lesson.title}
                </Button>

              </div>
            ))}
          
        </div>
      ))}
    </aside>
  );
};

// funcao que retorna o nosso estado
const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

//  funcao que retorna um dispatch para disparar uma action
const mapDispatchToProps = (dispatch) =>
  // mapeando nosso Objeto em forma de propriedade
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

