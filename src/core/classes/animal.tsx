import React from "react";

interface AnimalComponent {
  name: string;
  sound: string;
  alive?: boolean;
}

export const Animals: AnimalComponent[] = [
  { name: "Lion", sound: "Roar", alive: true },
  { name: "Elephant", sound: "Trumpet", alive: true },
  { name: "Giraffe", sound: "Grunt", alive: true },
];

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
