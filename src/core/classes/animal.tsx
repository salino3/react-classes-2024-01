import React from "react";

export interface AnimalComponent {
  name: string;
  sound: string;
  alive?: boolean;
}

export class Animal extends React.Component<AnimalComponent> {
  constructor(props: AnimalComponent) {
    super(props);
  }

  getStatus(): string {
    return this.props.alive ? "Alive" : "Not Alive";
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.sound}</p>
        <p>Status: {this.getStatus()}</p>
      </div>
    );
  }
}
