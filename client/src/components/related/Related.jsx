/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../state/ProductsContext.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import Modal from './Modal.jsx';
import './Related.css';

function Related() {
  const { currentProduct, getData } = useContext(ProductsContext);
  const [relatedIds, setRelatedIds] = useState(null);
  // const [comparing, setComparing] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [combined, setCombined] = useState(null);

  const getRelatedProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedIds = await axios.get(`products/${productId}/related`);
    return fetchedIds.data;
  };

  const combineFeatures = (comparingProduct) => {
    const combinedFeatures = {};
    if (!comparingProduct) { return null; }

    currentProduct.features.forEach((product) => {
      if (!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = ['✔️'];
        } else {
          combinedFeatures[product.feature] = [product.value];
        }
      }
    });

    comparingProduct.features.forEach((product) => {
      if (!combinedFeatures[product.feature]) {
        if (product.value === null) {
          combinedFeatures[product.feature] = ['', '✔️'];
        } else {
          combinedFeatures[product.feature] = ['', product.value];
        }
      } else if (product.value === null) {
        combinedFeatures[product.feature].push('✔️');
      } else {
        combinedFeatures[product.feature].push(product.value);
      }
    });
    return combinedFeatures;
  };

  const handleCardClick = (target, id, comparingProduct) => {
    if (target.classList.contains('related-action-btn')) {
      setModalOpen((current) => !current);
      setCombined(combineFeatures(comparingProduct));
      // console.log('open modal', id, currentProduct.name);
    } else {
      getData(id);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // useEffect(() => {
  //   getData('17080');
  // }, []);

  useEffect(() => {
    getRelatedProductsIds()
      .then((ids) => {
        setRelatedIds(ids);
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);

  return (
    <div className="related-products-section">
      { relatedIds ? (
        <RelatedProducts
          relatedIds={relatedIds}
          handleCardClick={handleCardClick}
          currentProduct={currentProduct}
        />
      ) : ''}
      <Modal
        modalOpen={modalOpen}
        combined={combined}
        closeModal={closeModal}
      />
      <YourOutfit currentProduct={currentProduct} />
    </div>
  );
}

export default Related;
