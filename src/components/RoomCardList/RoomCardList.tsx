import React, { PureComponent } from 'react';
import { RoomCard } from 'components/RoomСard/RoomСard';
import { Offer } from 'mocks/offers';
import { bind } from 'bind-decorator';

interface RoomCardListProps {
  rooms: Offer[];
}

interface RoomCardListState {
  activeRoom: string;
}

class RoomCardList extends PureComponent<RoomCardListProps, RoomCardListState> {
  constructor(props: RoomCardListProps) {
    super(props);

    this.state = {
      activeRoom: '',
    };
  }

  @bind
  private handleMouseEnter(id: string): void {
    this.setState({
      activeRoom: id,
    });
  }

  @bind
  private handleMouseLeave(): void {
    this.setState({
      activeRoom: '',
    });
  }

  render() {
    const { rooms } = this.props;
    const { activeRoom } = this.state;
    console.log(activeRoom);

    return (
      <div className="cities__places-list places__list tabs__content">
        {rooms.map((room) => {
          return (
            <RoomCard
              key={room.id}
              room={room}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
          );
        })}
      </div>
    );
  }
}

export { RoomCardList };
