class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { MonsterPortraits: [] };
  }

  addPortrait(someData) {
    this.setState([ ...this.state.MonsterPortraits, someData ]);
  }

  render() {
    const { monsterId } = this.props;

    return (
      <div>
        <div>
          <MonsterPortraitUpload addHandler={this.addPortrait} />
        </div>

        <div>
          <MonsterViewer monsterId={monsterId}/>
        </div>
      </div>
    );
  }
}
