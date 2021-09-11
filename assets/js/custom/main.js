`use strict`;

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      const productName = product.name.toLowerCase();
      if (
        productName.indexOf(filterText) === -1 ||
        (inStockOnly && !product.stocked)
      ) {
        return;
      }

      product.category !== lastCategory
        ? rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />
          )
        : null;
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleInputChange(e) {
//     this.props.handleInputChange(e.target.value);
//   }

//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }

//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     return (
//       <div>
//         <input
//           type="text"
//           value={filterText}
//           placeholder="Search..."
//           onChange={this.handleInputChange}
//         />
//         <br />
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={this.handleInStockChange}
//         />{" "}
//         Only show products in stock
//       </div>
//     );
//   }
// }

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnStockChange = this.handleOnStockChange.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target.value);
  }

  handleOnStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const stocked = this.props.inStockOnly;
    return (
      <div>
        <input
          type="text"
          value={filterText}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="checkbox"
          value={stocked}
          onChange={this.handleOnStockChange}
        />
        Only show products in stock
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", stocked: false };
    this.handleInputText = this.handleInputText.bind(this);
    this.handleOnStockChange = this.handleOnStockChange.bind(this);
  }

  handleInputText(filterText) {
    this.setState({ filterText: filterText });
  }

  handleOnStockChange(stocked) {
    this.setState({ stocked: stocked });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.stocked}
          handleInputChange={this.handleInputText}
          onInStockChange={this.handleOnStockChange}
        />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.stocked}
        />
      </div>
    );
  }
}

ReactDOM.render(<FilterableProductTable />, document.getElementById("root"));
