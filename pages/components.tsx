import Atom from '../components/Atom';
import AtomInput from '../components/AtomInput';
import Footer from '../components/footer';
import FormSearch from '../components/FormSearch';
import Header from '../components/header';
import { Layout } from '../components/layout';

const Components = () => {
  return (
    <div>
      <div>
        <h1>Atom</h1>
        <Atom />
      </div>
      ;
      <div>
        <h1>AtomInputs</h1>
        <AtomInput />
      </div>
      <div>
        <h1>Footer</h1>
        <Footer />
      </div>
      <div>
        <h1>FormSearch</h1>
        <FormSearch />
      </div>
      <div>
        <h1>Header</h1>
        <Header />
      </div>
      <div>
        <h1>Layout</h1>
        <Layout />
      </div>
    </div>
  );
};

export default Components;
