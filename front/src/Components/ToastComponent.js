import React from "react";
import { Col, Toast } from "react-bootstrap";

function ToastComponent(props) {
  return (
    <div className="toast-position"
      aria-live="polite"
      aria-atomic="true"
    >
      <Col xs={6}>
        <Toast
          onClose={() => props.setShow(false)}
          show={props.show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{props.title}</strong>
            <small>Now</small>
          </Toast.Header>
          <Toast.Body>{props.body}</Toast.Body>
        </Toast>
      </Col>
    </div>
  );
}

export default ToastComponent;
