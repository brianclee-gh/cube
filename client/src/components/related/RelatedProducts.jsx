/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, {
  useState, useContext, lazy, Suspense,
} from 'react';
import Carousel from './Carousel.jsx';
import RelatedCard from './RelatedCard.jsx';
// import Modal from './Modal.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';
import withClickTracker from '../shared/ClickTracker.jsx';

const Modal = lazy(() => import('./Modal.jsx'));

function RelatedProducts({
  relatedIds,
  setCachedData,
  cachedData,
}) {
  const { currentProduct, getData } = useContext(ProductsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [combined, setCombined] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const combineFeatures = (comparingProduct) => {
    const combinedFeatures = {};
    combinedFeatures.names = { comparing: comparingProduct.name, current: currentProduct.name };

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
    if (target.classList.contains('hover__no-hover')) {
      setModalOpen((current) => !current);
      setCombined(combineFeatures(comparingProduct));
    } else if (!target.classList.contains('hover__hover')) {
      getData(id);
    }
  };

  const uniqueItems = [...new Set(relatedIds.filter((id) => id !== currentProduct.id))];
  const TrackedRelatedCard = withClickTracker(RelatedCard);
  const TrackedModal = withClickTracker(Modal);

  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h3>YOU MAY LIKE...</h3>
      </div>
      <Carousel relatedOrOutfit="related">
        { uniqueItems ? (uniqueItems.map((id, index) => (
          <TrackedRelatedCard
            relatedIds={relatedIds}
            key={`${id}1`}
            handleCardClick={handleCardClick}
            id={id}
            index={index}
            cachedData={cachedData}
            setCachedData={setCachedData}
          />
        ))) : <div className="related-products-placeholder">Loading...</div> }
      </Carousel>
      <Suspense fallback={<div>Loading...</div>}>
        <TrackedModal
          currentProduct={currentProduct}
          modalOpen={modalOpen}
          combined={combined}
          closeModal={closeModal}
        />
      </Suspense>
    </div>
  );
}

export default RelatedProducts;
