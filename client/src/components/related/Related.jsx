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
  const [cachedData, setCachedData] = useState(() => {
    const storedData = localStorage.getItem('relatedProducts');
    return storedData !== null
      ? JSON.parse(storedData)
      : {};
  });
  const [relatedIds, setRelatedIds] = useState(null);
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

  const handleCardClick = (e, target, id, comparingProduct) => {
    e.preventDefault();
    if (target.classList.contains('related-action-btn')) {
      setModalOpen((current) => !current);
      setCombined(combineFeatures(comparingProduct));
    } else {
      getData(id);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // useEffect(() => {
  //   getData('17067');
  // }, []);

  useEffect(() => {
    if (Object.keys(cachedData).length > 0) {
      localStorage.setItem('relatedProducts', JSON.stringify(cachedData));
      console.log('saved')
    } else if (Object.keys(cachedData).length === 0) {
      localStorage.setItem('relatedProducts', JSON.stringify({}));
    }
  }, [cachedData]);

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
          cachedData={cachedData}
          setCachedData={setCachedData}
        />
      ) : ''}
      <Modal
        modalOpen={modalOpen}
        combined={combined}
        closeModal={closeModal}
      />
      <YourOutfit cachedData={cachedData} setCachedData={setCachedData} />
    </div>
  );
}

export default Related;
